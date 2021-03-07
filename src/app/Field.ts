import {FieldValue, IField, IGame} from './game.interface';

export class Field implements IField {
  value: FieldValue;

  shoot(): IGame {
    throw new Error('You should implement this');
  }

  constructor(value: FieldValue) {
    this.value = value;
  }
}
