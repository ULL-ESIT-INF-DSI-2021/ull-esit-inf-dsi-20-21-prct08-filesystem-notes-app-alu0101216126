import {Comision} from "./comision";

/**
 * @class Hija de la clase Comision que tiene que implementar los métodos abstractos
 */
export class Visa extends Comision {
  /**
     * Inicializamos atributos
     * @param amount Cantidad de dinero
     */
  constructor(protected amount: number) {
    super(amount);
  }

  /**
   * Muestra el resultado de la comisión
   * @param result Valor de la comisión
   */
  protected showComision(result: number) {
    console.log(`La comisión en Visa es: ${result}`);
  }

  /**
   * Realiza la operación para obtener la comisión
   * @returns valor de la comisión
   */
  comisionAmount(): number {
    return this.amount * 0.65;
  }
}
