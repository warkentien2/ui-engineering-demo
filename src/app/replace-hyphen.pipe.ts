import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceHyphen'
})
export class ReplaceHyphenPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }
    /*
    using non-breaking hyphen
    http://www.unicode-symbol.com/u/2011.html
     */
    const nonBreakingHyphen = '\u2011';
    return value.replace(/-/g, nonBreakingHyphen);
  }
}
