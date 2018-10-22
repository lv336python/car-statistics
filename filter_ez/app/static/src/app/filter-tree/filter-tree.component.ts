import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {File} from "../_models/data";

@Component({
    selector: 'filter-tree',
    templateUrl: './filter-tree.component.html',
    styleUrls: ['./filter-tree.component.css']
})
export class FilterTreeComponent implements OnInit {

    files: Array<File>;
    file_id: number;
    totalRows: number;
    save_error: string;
    filter_name: string;
    filter_params: object = {
        0: {
            'params': {},
            'child': false,
            'parent_id': false,
            'disabledColumns': [],
            'settings': {
                'count_rows': undefined,
                'quantity': '',
                'qtt_readonly': '',
            },
        }
    };

    metadata: object;
    columns: string[];

    constructor(private http: HttpClient,
                private router: Router) {

    }

    ngOnInit() {
        this.getFiles();
    }

    getFiles() {
        this.http
            .post('/api/get_files', '')
            .subscribe((res: Array<File>) => this.files = res,
                error => {
                    console.log(error);
                });
    }

    selectFile(id) {
        this.file_id = id;
        this.getMetadata(this.file_id);
    }

    getMetadata(id) {
        this.http
            .post(`/api/get_metadata/${this.file_id}`, {'file_id': this.file_id})
            .subscribe(res => this.parseMetadata(res),
                error => {
                    console.log(error);
                });
    }

    parseMetadata(data) {
        this.totalRows = data['rows'];
        this.columns = Object.keys(data['metadata']);
        this.metadata = data['metadata'];
    }

    updateFilterParams(data) {
        this.filter_params = data;
    }

    addChild(parentIndex) {
        this.filter_params[parentIndex]['child'] = {};
        this.filter_params[parentIndex]['child'][0] = {
            'params': {},
            'child': false,
            'disabledColumns': [this.filter_params[parentIndex]['params']['column']],
            'parent_id': parentIndex,
            'settings': {
                'count_rows': undefined,
                'quantity': '',
                'qtt_readonly': ''
            }
        };
        this.updateFilterParams(this.filter_params);
    }

    addLastChild(parentIndex, child_id) {
        this.filter_params[parentIndex]['child'][child_id]['child'] = {};
        this.filter_params[parentIndex]['child'][child_id]['child'][0] = {
            'params': {},
            'child': false,
            'disabledColumns': [this.filter_params[parentIndex]['params']['column'], this.filter_params[parentIndex]['child'][0]['params']['column'] ],
            'parent_id': parentIndex,
            'child_id': child_id,
            'settings': {
                'count_rows': undefined,
                'quantity': '',
                'qtt_readonly': ''
            }
        };
        this.updateFilterParams(this.filter_params);
    }

    saveFilter() {
        if (!this.filter_name) {
            this.save_error = 'Filter name is required';
            return false;
        }

        let filter_params = this.filter_params;
        let filter = {};
        for (let key in filter_params) {
            filter[key] = this.deleteUnnecessaryElem(filter_params[key]);
            if (this.checkParams(filter[key])) {
                this.save_error = 'You have blank fields';
                return 'error';
            }
            if ('child' in filter_params[key]) {

                for (let child_key in filter_params[key]['child']) {
                    filter[key]['child'][child_key] = this.deleteUnnecessaryElem(filter_params[key]['child'][child_key]);
                    if (this.checkParams(filter[key]['child'][child_key])) {
                        this.save_error = 'You have blank fields';
                        return 'error';
                    }
                    if ('child' in filter_params[key]['child'][child_key]) {

                        for (let child_last_key in filter_params[key]['child'][child_key]['child']) {
                            filter[key]['child'][child_key]['child'][child_last_key] = this.deleteUnnecessaryElem(filter_params[key]['child'][child_key]['child'][child_last_key]);
                            if (this.checkParams(filter[key]['child'][child_key]['child'][child_last_key])) {
                                this.save_error = 'You have blank fields';
                                return 'error';
                            }
                        }
                    }
                }
            }
        }
        console.log(filter);
        this.http
            .post('/api/save_filter', {
                'params': filter,
                'name': 'ggsgsd',
                'file_id': this.file_id
            })
            .subscribe(data => this.router.navigate(['/']),
                error => {
                    console.log(error);
                });
    }

    deleteUnnecessaryElem(object_data) {
        delete object_data.parent_id;
        delete object_data.child_id;
        delete object_data.settings;
        return object_data;
    }

    checkParams(filter) {
        return Object.keys(filter.params).length < 4;
    }

    setFilterName(value) {
        this.filter_name = value;
    }
}
