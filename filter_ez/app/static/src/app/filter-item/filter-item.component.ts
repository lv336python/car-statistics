import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'filter-item',
    templateUrl: './filter-item.component.html',
    styleUrls: ['./filter-item.component.css']
})
export class FilterItemComponent implements OnInit {
    column: string;
    operator: string;
    value: string;
    valueToSend : any;
    quantity: number;
    count_rows: number = undefined;
    operatorBtwElem = '';

    valid_quantity = true;
    maxPercentageForUser = 100;
    new_column = true;
    param_index = 0;
    quantityError: string;
    rangeValueError: string;
    qtt_readonly = false;

    disColumn = false;
    disValue = false;
    disQuantity = false;
    rangeValue: number;

    betweenMin : number;
    betweenMax : number;

    valuesPushed = false;
    valueMaxMin = {};
    disable_columns= [];


    values = [];

    // @Output() addFilterElem: EventEmitter<any> = new EventEmitter<any>();
    @Output() updateFilterItemParams: EventEmitter<object> = new EventEmitter<object>();
    // @Output() saveFilter: EventEmitter<any> = new EventEmitter<any>();

    @Input() columns: string[];
    @Input() metadata: object;
    @Input() f_param: object;
    @Input() f_index: number;
    @Input() file_id: number;
    @Input() totalRows: number;
    @Input() child: string;
    @Input() parent_id: number;
    @Input() child_id: number;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        if (this.parent_id && !this.child_id) {
            this.disable_columns = this.f_param[this.parent_id]['child'][0]['disabledColumns'];

            if (this.f_param[this.parent_id]['child'][this.f_index]['params']['column']) {
                this.selectedColumnName(this.f_param[this.parent_id]['child'][this.f_index]['params']['column']);
                this.disColumn = true;
            }
            this.operator = this.f_param[this.parent_id]['child'][this.f_index]['params']['operator'] ? this.f_param[this.parent_id]['child'][this.f_index]['params']['operator'] : '';
            if (this.f_param[this.parent_id]['child'][this.f_index]['params']['value']) {
                this.value = this.f_param[this.parent_id]['child'][this.f_index]['params']['value'];
                this.disValue = true;
            }
            this.parseSettings(this.f_param[this.parent_id]['child'][this.f_index]['settings']);
        } else if (this.parent_id && this.child_id) {
            this.disable_columns = this.f_param[this.parent_id]['child'][0]['child'][0]['disabledColumns'];

            if (this.f_param[this.parent_id]['child'][this.child_id]['child'][this.f_index]['params']['column']) {
                this.selectedColumnName(this.f_param[this.parent_id]['child'][this.child_id]['child'][this.f_index]['params']['column']);
                this.disColumn = true;
            }
            this.operator = this.f_param[this.parent_id]['child'][this.child_id]['child'][this.f_index]['params']['operator'] ? this.f_param[this.parent_id]['child'][this.child_id]['child'][this.f_index]['params']['operator'] : '';
            if (this.f_param[this.parent_id]['child'][this.child_id]['child'][this.f_index]['params']['value']) {
                this.value = this.f_param[this.parent_id]['child'][this.child_id]['child'][this.f_index]['params']['value'];
                this.disValue = true;
            }
            this.parseSettings(this.f_param[this.parent_id]['child'][this.child_id]['child'][this.f_index]['settings']);
        } else {
            if (this.f_param[this.f_index]['params']['column']) {
                this.selectedColumnName(this.f_param[this.f_index]['params']['column']);
                this.disColumn = true;
            }
            this.operator = this.f_param[this.f_index]['params']['operator'] ? this.f_param[this.f_index]['params']['operator'] : '';
            if (this.f_param[this.f_index]['params']['value']) {
                this.value = this.f_param[this.f_index]['params']['value'];
                this.disValue = true;
            }
            this.parseSettings(this.f_param[this.f_index]['settings']);
        }
            console.log('count', this.count_rows);

    }

    // save() {
    //     if (!this.checkQuantity()) {
    //         return false;
    //     }
    //     if (!this.valuesPushed) {
    //         this.pushFilterParams.emit({
    //             'column': this.column,
    //             'operator': this.operator,
    //             'value': this.value,
    //             'quantity': this.calculateQuantity(),
    //         });
    //     }
    //     this.valuesPushed = true;
    //     this.saveFilter.emit();
    // }

    selectedColumnName(column) {
        this.column = column;
        this.value = '';
        if ('min' in this.metadata[column] && 'max' in this.metadata[column]) {
            this.valueMaxMin = {
                'min': this.metadata[column]['min'],
                'max': this.metadata[column]['max']
        }
        } else {
            this.values = this.metadata[column];
            this.valueMaxMin = {};
        }
    }

    setQuantity(quantity) {
        this.quantity = quantity;
    }

    addValue(value) {
        this.disColumn = true;
        this.value = value;
        if (this.parent_id && !this.child_id) {
            this.f_param[this.parent_id]['child'][this.f_index].params = {
                'column': this.column,
                'operator': this.operator,
                'value': this.value
            };
            let child_params = [
                this.f_param[this.parent_id].params,
                this.f_param[this.parent_id]['child'][this.f_index].params
            ];
            this.http
                .post('/api/count_rows', {'file_id': this.file_id, 'params': child_params})
                .subscribe(res => this.setCountRows(res),
                    error => {
                        console.log(error);
                    });
        } else if (this.parent_id && this.child_id) {
            this.f_param[this.parent_id]['child'][this.child_id]['child'][this.f_index].params = {
                'column': this.column,
                'operator': this.operator,
                'value': this.value
            };
            let last_child_params = [
                this.f_param[this.parent_id].params,
                this.f_param[this.parent_id]['child'][this.child_id].params,
                this.f_param[this.parent_id]['child'][this.child_id]['child'][this.f_index].params,
            ];
            this.http
                .post('/api/count_rows', {'file_id': this.file_id, 'params': last_child_params})
                .subscribe(res => this.setCountRows(res),
                    error => {
                        console.log(error);
                    });
        } else {
            this.f_param[this.f_index].params = {
                'column': this.column,
                'operator': this.operator,
                'value': this.value
            };
            this.http
                .post('/api/count_rows', {'file_id': this.file_id, 'params': this.f_param[this.f_index].params})
                .subscribe(res => this.setCountRows(res),
                    error => {
                        console.log(error);
                    });
        }
    }

    addOperator(oper) {
        this.operator = oper;
    }

    // operatorElems(data) {
    //     this.disValue = true;
    //     this.operatorBtwElem = data;
    // }

    setPercentage() {
        if (this.totalRows != 0) {
            this.maxPercentageForUser = +(this.count_rows * 100 / this.totalRows).toFixed(2);
        } else {
            this.maxPercentageForUser = 100
        }
    }

    setCountRows(data) {
        this.count_rows = data;
        this.setPercentage();
    }

    calculateQuantity() {
        return Math.floor(this.totalRows * this.quantity / 100);
    }

    checkQuantity() {
        if (!this.quantity) {
            this.valid_quantity = false;
            this.quantityError = 'This field is required';
            return false;
        } else if (this.quantity > this.maxPercentageForUser) {
            this.quantityError = "This value can't be greater then " + this.maxPercentageForUser;
            this.valid_quantity = false;
            return false;
        }
        return true;
    }

    setRangeValue(data) {
        this.value = data;
        if (this.checkRangeValue()) {
            this.rangeValueError = '';
            this.addValue(data)
        }
    }

    setBetweenMin(data) {
        this.betweenMin = data;
        if (this.checkMinBetweenValue()) {
            this.rangeValueError = '';
            this.addRangeValue()
        }
    }

    setBetweenMax(data) {
        this.betweenMax = data;
        if (this.checkMaxBetweenValue()) {
            this.rangeValueError = '';
            this.addRangeValue()
        }
    }

    checkMinBetweenValue() {
        if (this.betweenMin > this.valueMaxMin['max'] || this.betweenMin < this.valueMaxMin['min']) {
            this.rangeValueError = "This value should be in range between " + this.valueMaxMin['min'] + ' and ' + this.valueMaxMin['max'];
            return false;
        }
        else if (this.betweenMin > this.betweenMax ||
            this.betweenMax == undefined|| this.betweenMin == undefined) {
            this.rangeValueError = "min value should be lesser than max value";
            return false;
        }
        return true;
    }

    checkMaxBetweenValue() {
        if (this.betweenMax > this.valueMaxMin['max'] || this.betweenMax < this.valueMaxMin['min']) {
            this.rangeValueError = "This value should be in range between " + this.valueMaxMin['min'] + ' and ' + this.valueMaxMin['max'];
            return false;
        }
        else if (this.betweenMin > this.betweenMax ||
            this.betweenMax == undefined || this.betweenMin == undefined) {
            this.rangeValueError = "min value should be lesser than max value";
            return false;
        }
        return true;
    }

    addRangeValue() {
        this.disColumn = true;
        if (this.parent_id && !this.child_id) {
            this.f_param[this.parent_id]['child'][this.f_index].params = {
                'column': this.column,
                'operator': this.operator,
                'value': {'from':this.betweenMin, 'to':this.betweenMax}
            };
            let child_params = [
                this.f_param[this.parent_id].params,
                this.f_param[this.parent_id]['child'][this.f_index].params
            ];
            this.http
                .post('/api/count_rows', {'file_id': this.file_id, 'params': child_params})
                .subscribe(res => this.setCountRows(res),
                    error => {
                        console.log(error);
                    });
        } else if (this.parent_id && this.child_id) {
            this.f_param[this.parent_id]['child'][this.child_id]['child'][this.f_index].params = {
                'column': this.column,
                'operator': this.operator,
                'value': {'from':this.betweenMin, 'to':this.betweenMax}
            };
            let last_child_params = [
                this.f_param[this.parent_id].params,
                this.f_param[this.parent_id]['child'][this.child_id].params,
                this.f_param[this.parent_id]['child'][this.child_id]['child'][this.f_index].params,
            ];

            this.http
                .post('/api/count_rows', {'file_id': this.file_id, 'params': last_child_params})
                .subscribe(res => this.setCountRows(res),
                    error => {
                        console.log(error);
                    });
        } else {
            this.f_param[this.f_index].params = {
                'column': this.column,
                'operator': this.operator,
                'value': {'from':this.betweenMin, 'to':this.betweenMax}
            };
            this.http
                .post('/api/count_rows', {'file_id': this.file_id, 'params': this.f_param[this.f_index].params})
                .subscribe(res => this.setCountRows(res),
                    error => {
                        console.log(error);
                    });
        }
    }

    checkRangeValue() {
        if ('max' in this.valueMaxMin) {
            if (this.value > this.valueMaxMin['max'] || this.value < this.valueMaxMin['min']) {
                this.rangeValueError = "This value should be in range between " + this.valueMaxMin['min'] + ' and ' + this.valueMaxMin['max'];
                return false;
            }
        }
        return true;
    }

    parseSettings(data) {
        if (data) {
            this.count_rows = data['count_rows'];
            this.quantity = data['quantity'];
            this.qtt_readonly = data['qtt_readonly'];
        }
    }

    validateBeforeSaving() {
        this.valueToSend = this.value;

        if (!this.checkQuantity()) {
            return false;
        }
        if (this.operator == 'range') {
            if(!this.checkMaxBetweenValue() || !this.checkMinBetweenValue()) {
                return false;
            }

            this.valueToSend = {'from':this.betweenMin, 'to': this.betweenMax};
        }
        else if (!this.checkRangeValue()) {
            return false
        }
    }

    addNewColumn() {
        this.validateBeforeSaving();

        this.f_param[this.f_index]= {
            'params': {
                'column': this.column,
                'operator': this.operator,
                'value': this.valueToSend,
                'quantity': this.calculateQuantity() },
            'settings' : {
                'count_rows': this.count_rows,
                'quantity': this.quantity,
                'qtt_readonly': true },
        };

        let new_index = Object.keys(this.f_param).length;
        this.f_param[new_index] = {
            'params': {
                'column': this.column,
            },
            'child': false,
        };
        this.updateFilterItemParams.emit(this.f_param);
    }



    addChild(parentIndex) {
        this.validateBeforeSaving();

        this.f_param[this.parent_id]['child'][this.f_index] = {
            'parent_id': this.parent_id,
            'child': false,
            'settings' : {
                'count_rows': this.count_rows,
                'quantity': this.quantity,
                'qtt_readonly': true },
            'params' : {
                'column': this.column,
                'operator': this.operator,
                'value': this.valueToSend,
                'quantity': this.calculateQuantity() },
        };

        let new_child_index = Object.keys(this.f_param[parentIndex]['child']).length;
        this.f_param[parentIndex]['child'][new_child_index] = {
            'params': {
                'column': this.column },
            'child': false,
            'parent_id': parentIndex,
            'settings': {
                'count_rows': undefined,
                'quantity': '',
                'qtt_readonly': '' },
        };
        this.updateFilterItemParams.emit(this.f_param);
    }

    saveParent() {
        this.validateBeforeSaving();

        this.f_param[this.f_index] = {
            'params': {
                'column': this.column,
                'operator': this.operator,
                'value': this.valueToSend,
                'quantity': this.calculateQuantity() },
            'settings': {
                'count_rows': this.count_rows,
                'quantity': this.quantity,
                'qtt_readonly': true },
        };
        this.updateFilterItemParams.emit(this.f_param);
    }

    saveChild() {
        this.validateBeforeSaving();

        this.f_param[this.parent_id]['child'][this.f_index]= {
            'params' : {
                'column': this.column,
                'operator': this.operator,
                'value': this.valueToSend,
                'quantity': this.calculateQuantity() },
            'parent_id' : this.parent_id,
            'child' : false,
            'settings' : {
                'count_rows': this.count_rows,
                'quantity': this.quantity,
                'qtt_readonly': true }
        };
        this.updateFilterItemParams.emit(this.f_param);

    }

    addLastChild(parent_id, child_id) {
        this.validateBeforeSaving();

        this.f_param[parent_id]['child'][child_id]['child'][this.f_index] = {
            'params': {
                'column': this.column,
                'operator': this.operator,
                'value': this.valueToSend,
                'quantity': this.calculateQuantity() },
            'parent_id' : parent_id,
            'child' : false,
            'child_id' : child_id,
            'settings' : {
                'count_rows': this.count_rows,
                'quantity': this.quantity,
                'qtt_readonly': true,
            }
        };

        let last_index = Object.keys(this.f_param[parent_id]['child'][child_id]['child']).length;
        this.f_param[parent_id]['child'][child_id]['child'][last_index] = {
            'params': {
                'column': this.column },
            'child': false,
            'parent_id': parent_id,
            'child_id': child_id,
            'settings': {
                'count_rows': undefined,
                'quantity': '',
                'qtt_readonly': ''
            }
        };
        this.updateFilterItemParams.emit(this.f_param);
    }

    saveLastChild() {

        this.validateBeforeSaving();

        this.f_param[this.parent_id]['child'][this.child_id]['child'][this.f_index] = {
            'params' : {
                'column': this.column,
                'operator': this.operator,
                'value': this.valueToSend,
                'quantity': this.calculateQuantity() },
            'parent_id' : this.parent_id,
            'child' : false,
            'settings' : {
                'count_rows': this.count_rows,
                'quantity': this.quantity,
                'qtt_readonly': true,
            }
        };

        this.updateFilterItemParams.emit(this.f_param);
    }
}
