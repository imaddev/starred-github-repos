import { Pipe, PipeTransform } from '@angular/core';
import { format, toDate, isValid, formatDistanceToNow } from 'date-fns';

@Pipe({
    name: '_date',
    pure: false,
})
export class DatePipe implements PipeTransform {
    transform(value: Date | number, formatString: string = 'dd/MM/yyyy HH:mm'): string {
        if (value) {
            if (typeof value === 'string' && String(value).indexOf('/') !== -1) {
                const [day, month, year] = String(value).substr(0, 10).split('/');

                value = toDate(new Date(Number(year), Number(month) - 1, Number(day)));
            }

            if (formatString === 'fn') {
                return formatDistanceToNow(value, {
                    // tslint:disable-next-line:no-any
                    locale: (window as any).__locale__,
                    addSuffix: true,
                });
            }

            if (typeof value === 'string' && !isNaN(+value)) {
                value = +value;
            }

            if (!isValid(value)) {
                return '';
            }

            return format(value, formatString, {
                // tslint:disable-next-line:no-any
                locale: (window as any).__locale__,
            });
        } else {
            return '';
        }
    }
}
