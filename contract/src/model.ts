export const POINT_ONE = '100000000000000000000000';

export class PostedMessage {
  sender: string;
  text: string;
  entregado: boolean;

  constructor({ entregado, sender, text }: PostedMessage) {
    this.sender = sender;
    this.text = text;
    this.entregado = entregado;
  }
}