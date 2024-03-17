import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrapFn',
  standalone: true,
})
export class WrapFnPipe implements PipeTransform {
  transform<TArg0, R>(
    fn: (arg0: TArg0) => R, 
    arg0: TArg0
  ): R;

  transform<TArg0, TArg1, R>(
    fn: (arg0: TArg0, arg1: TArg1) => R,
    arg0: TArg0, 
    arg1: TArg1
  ): R;

  transform<TArg0, TArg1, TArg2, R>(
    fn: (arg0: TArg0, arg1: TArg1, arg2: TArg2) => R,
    arg0: TArg0, 
    arg1: TArg1, 
    arg2: TArg2
  ): R;

  transform<T>(fn: (...arg: unknown[]) => T, ...args: unknown[]): T {
    return fn(args)
  }
}
