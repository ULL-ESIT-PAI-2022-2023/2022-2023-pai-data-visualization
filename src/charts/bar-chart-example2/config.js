/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Eva Peso Adán <peso.adan.05@ull.edu.es>
 * @author Raimon José Mejías Hernández  <raimon.mejias.35@ull.edu.es>
 * @since Apr 7 2023
 * 
 * @desc general configuration of the bar chart
 *       
 * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-data-visualization}
 */
'use strict';

import { DATA } from './setup.js';

/** 
 * @desc Type of the chart to represent
 * Contains the type of the Chart, in this case is a bar Chart
 */
const TYPE = 'bar';

/**
 * @desc  The general options of the bar chart, 
 * includes chart specific options like resposive or the aspecRatio but can have
 * Data options, this options are set to all Data objects in the Chart
 */
const OPTIONS = {
  responsive: true,           // Respond to size changes in the canvas
  maintainAspectRatio: false, // Deactivates the AspectRatio
  indexAxis: 'x',             // Change it to y to make a horizontal bar Chart
  scales: {
    y: {
      beginAtZero: true,      // It makes the chart begin from 0 instead of the min value of the data
      stacked: true           // Enable the display of a stack bar chart 
    },
    x: {
      stacked: true,          // Enable the display of a stack bar chart 
      reverse: true           // Display the information from the last DataObject to the first one
    },
  },
  plugins: {
    title: {                  // Activate the Title of the chart
      display: true,
      color: 'black',
      text: 'GDP(PIB) of different countries',
      font: {
        size: 30,
      }
    }
  },
};

/** 
 * @desc Configuration of the chart 
 * It contains all the necessary information for the BarChart to work
 */
export const CONFIG = {
  type: TYPE,      // The type of the chart
  data: DATA,      // The ChartData object that contains all the information
                   // that is going to be displayed and their respective options
  options: OPTIONS // All the general options of the chart
};