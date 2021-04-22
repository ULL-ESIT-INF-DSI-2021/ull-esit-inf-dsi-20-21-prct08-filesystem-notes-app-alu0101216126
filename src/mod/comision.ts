/**
 * @class Comision clase abstracta que define un esqueleto algorítmico según el patron Template method
 * para el uso de tarjetas de crédito
 */
export abstract class Comision {
  /**
   * Inicializamos atributos
   * @param amount Cantidad de dinero
   */
  constructor(protected amount: number) {}

  /**
   * Esqueleto algorítmico que establece los pasos u operaciones comunes
   * @returns Devuelve el resultado de la comisión
   */
  public run(): number {
    const amount = this.comisionAmount();
    this.showComision(amount);
    return amount;
  }

  /**
   * Método abstracto para la comisión que se deberá implementar en las clases hijas
   * @returns Resultado de la comisión
   */
  protected abstract comisionAmount(): number;

  /**
   * Método hook para mostrar la comisión
   */
  protected showComision(result: number) {};
}
