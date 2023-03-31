/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Eva Peso Adán <peso.adan.05@ull.edu.es>
 * @author Raimon José Mejías Hernández  <raimon.mejias.35@ull.edu.es>
 * @since Mar 30 2023
 * 
 * @desc Configuration for the radar chart
 *       
 * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-data-visualization}
 */

'use strict';

import { DATA } from './setup.js';

const TYPE = 'polarArea'; // Contains the type of the Chart, in this case is a Polar Area Chart

const OPTIONS = {
  responsive: true,  // Respond to size changes in the canvas
  maintainAspectRatio: false, // Desactive the AspectRatio
}

/** @desc Configuration of the chart */
export const CONFIG = {
  type: TYPE, // The type of the chart
  data: DATA, // The data that is going to be displayed
  options: OPTIONS // All other options of the chart, It can set data options in all DataSets
};