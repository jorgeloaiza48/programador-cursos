
import './rejilla.css'
import React from 'react'
import { HotTable } from '@handsontable/react'
import 'handsontable/dist/handsontable.full.css';
import { registerAllModules } from 'handsontable/registry'
import 'handsontable/dist/handsontable.full.min.css';
import backGroundColorFestivos from './rellenoFestivos';
//import { legacy_createStore as createStore } from 'redux';
//import { useDispatch } from 'react-redux';
//import { render } from '@testing-library/react';
import { useRef } from 'react';
//import {useEffect} from 'react'


function Rejilla() {

  //Permite obtener todas las funciones de "handsontable"
  registerAllModules()

  //****Crea un arreglo de 24 filas por 250 columnas(24x250)
  let Data = new Array(25) //crea un array de 25 posiciones(filas)
  for (let i = 0; i < 24; i++) {  //este ciclo coloca en cada posición un array de 250 posiciones(columnas)
    Data[i] = new Array(252)
  }

  Data[21][16] = "Total Horas"
  Data[21][40] = "Total Horas"

  //Este ciclo imprime el nombre de los meses sobre las celdas combinadas
  let labelPositions = [1, 22, 46, 67, 91, 114, 136, 160, 182, 205, 228]
  let mesesLabel = ["FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"]
  for (let i = 0; i < labelPositions.length; i++) {
    Data[1][labelPositions[i]] = mesesLabel[i]
  }

  //Imprime la palabra "hora" en cada columna donde inicia cada mes
  let horas = [0, 21, 45, 66, 90, 113, 135, 159, 181, 204, 227, 249]
  for (let i = 0; i < horas.length; i++) {
    Data[3][horas[i]] = "Hora"
  }

  //******************************FEBRERO****************************************************** */

  //*******Este bloque imprime las iniciales de los días de la semana acorde al mes (febrero)***//
  //*******Coloca los valores correspondientes a cadía hábil del mes de febrero */
  let dias = ["L", "M", "Mi", "J", "V"]
  let aux = 2 //esta variable empieza en 2 porque en el array "dias" la posición 2 corresponde a "M"(Miércoles)que es el primer día hábil de febrero
  let valor = 1
  for (let i = 1; i < 21; i++) {
    Data[3][i] = dias[aux]
    Data[2][i] = valor
    Data[0][i] = 2
    if (aux === 4) {
      aux = 0
      valor = valor + 3
    }
    else {
      aux++
      valor++
    }
  }
  //**********************************************************************************//

  //***********************************MARZO******************************************/
  //*******Este bloque imprime las iniciales de los días de la semana acorde al mes (marzo)***//
  //*******Coloca los valores correspondientes a cadía hábil del mes de marzo */
  let dias_marzo = ["L", "M", "Mi", "J", "V"]
  let aux_marzo = 2 //esta variable empieza en 2 porque en el array "dias" la posición 2 corresponde a "M"(Miércoles)que es el primer día hábil de marzo
  let valor_marzo = 1
  for (let i = 22; i < 45; i++) {
    Data[3][i] = dias_marzo[aux_marzo]
    Data[2][i] = valor_marzo
    Data[0][i] = 3
    if (aux_marzo === 4) {
      aux_marzo = 0
      valor_marzo = valor_marzo + 3
    }
    else {
      aux_marzo++
      valor_marzo++
    }
  }
  //**********************************************************************************//
  //***********************************ABRIL******************************************/
  //*******Este bloque imprime las iniciales de los días de la semana acorde al mes (abril)***//
  //*******Coloca los valores correspondientes a cadía hábil del mes de abril */
  let dias_abril = ["L", "M", "Mi", "J", "V"]
  let aux_abril = 0 //esta variable empieza en 0 porque en el array "dias" la posición 0 corresponde a "L"(Lunes)que es el primer día hábil de abril
  let valor_abril = 3
  for (let i = 46; i < 66; i++) {
    Data[3][i] = dias_abril[aux_abril]
    Data[2][i] = valor_abril
    Data[0][i] = 4
    if (aux_abril === 4) {
      aux_abril = 0
      valor_abril = valor_abril + 3
    }
    else {
      aux_abril++
      valor_abril++
    }
  }
  //**********************************************************************************//
  //***********************************MAYO******************************************/
  //*******Este bloque imprime las iniciales de los días de la semana acorde al mes (mayo)***//
  //*******Coloca los valores correspondientes a cadía hábil del mes de mayo */
  let dias_mayo = ["L", "M", "Mi", "J", "V"]
  let aux_mayo = 0 //esta variable empieza en 0 porque en el array "dias" la posición 0 corresponde a "L"(Lunes)que es el primer día hábil de mayo
  let valor_mayo = 1
  for (let i = 67; i < 90; i++) {
    Data[3][i] = dias_mayo[aux_mayo]
    Data[2][i] = valor_mayo
    Data[0][i] = 5
    if (aux_mayo === 4) {
      aux_mayo = 0
      valor_mayo = valor_mayo + 3
    }
    else {
      aux_mayo++
      valor_mayo++
    }
  }
  //**********************************************************************************//
  //***********************************JUNIO******************************************/
  //*******Este bloque imprime las iniciales de los días de la semana acorde al mes (junio)***//
  //*******Coloca los valores correspondientes a cadía hábil del mes de junio */
  let dias_junio = ["L", "M", "Mi", "J", "V"]
  let aux_junio = 3 //esta variable empieza en 0 porque en el array "dias" la posición 0 corresponde a "L"(Lunes)que es el primer día hábil de mayo
  let valor_junio = 1
  for (let i = 91; i < 113; i++) {
    Data[3][i] = dias_junio[aux_junio]
    Data[2][i] = valor_junio
    Data[0][i] = 6
    if (aux_junio === 4) {
      aux_junio = 0
      valor_junio = valor_junio + 3
    }
    else {
      aux_junio++
      valor_junio++
    }
  }
  //**********************************************************************************//
  //***********************************JULIO******************************************/
  //*******Este bloque imprime las iniciales de los días de la semana acorde al mes (julio)***//
  //*******Coloca los valores correspondientes a cadía hábil del mes de julio */
  let dias_julio = ["L", "M", "Mi", "J", "V"]
  let aux_julio = 0 //esta variable empieza en 0 porque en el array "dias" la posición 0 corresponde a "L"(Lunes)que es el primer día hábil de julio
  let valor_julio = 3 //este valor es 3 porque el primer día hábil de julio es un tres.
  for (let i = 114; i < 135; i++) {
    Data[3][i] = dias_julio[aux_julio]
    Data[2][i] = valor_julio
    Data[0][i] = 7
    if (aux_julio === 4) {
      aux_julio = 0
      valor_julio = valor_julio + 3
    }
    else {
      aux_julio++
      valor_julio++
    }
  }
  //**********************************************************************************//
  //***********************************AGOSTO******************************************/
  //*******Este bloque imprime las iniciales de los días de la semana acorde al mes (agosto)***//
  //*******Coloca los valores correspondientes a cadía hábil del mes de agosto */
  let dias_agosto = ["L", "M", "Mi", "J", "V"]
  let aux_agosto = 1 //esta variable empieza en 1 porque en el array "dias" la posición 1 corresponde a "M"(martes)que es el primer día hábil de agosto.
  let valor_agosto = 1 //este valor es 1 porque el primer día hábil de agosto es uno.
  for (let i = 136; i < 159; i++) {
    Data[3][i] = dias_agosto[aux_agosto]
    Data[2][i] = valor_agosto
    Data[0][i] = 8
    if (aux_agosto === 4) {
      aux_agosto = 0
      valor_agosto = valor_agosto + 3
    }
    else {
      aux_agosto++
      valor_agosto++
    }
  }
  //**********************************************************************************//
  //***********************************SEPTIEMBRE******************************************/
  //*******Este bloque imprime las iniciales de los días de la semana acorde al mes (septiembre)***//
  //*******Coloca los valores correspondientes a cadía hábil del mes de septiembre */
  let dias_septiembre = ["L", "M", "Mi", "J", "V"]
  let aux_septiembre = 4 //esta variable empieza en 4 porque en el array "dias" la posición 4 corresponde a "V"(viernes)que es el primer día hábil de septiembre.
  let valor_septiembre = 1 //este valor es 1 porque el primer día hábil de septiembre es uno.
  for (let i = 160; i < 181; i++) {
    Data[3][i] = dias_septiembre[aux_septiembre]
    Data[2][i] = valor_septiembre
    Data[0][i] = 9
    if (aux_septiembre === 4) {
      aux_septiembre = 0
      valor_septiembre = valor_septiembre + 3
    }
    else {
      aux_septiembre++
      valor_septiembre++
    }
  }
  //**********************************************************************************//
  //***********************************OCTUBRE******************************************/
  //*******Este bloque imprime las iniciales de los días de la semana acorde al mes(octubre)***//
  //*******Coloca los valores correspondientes a cadía hábil del mes de octubre */
  let dias_octubre = ["L", "M", "Mi", "J", "V"]
  let aux_octubre = 0 //esta variable empieza en 0 porque en el array "dias" la posición 0 corresponde a "L"(Lunes)que es el primer día hábil de octubre.
  let valor_octubre = 2 //este valor es 2 porque el primer día hábil de octubre es dos.
  for (let i = 182; i < 204; i++) {
    Data[3][i] = dias_octubre[aux_octubre]
    Data[2][i] = valor_octubre
    Data[0][i] = 10
    if (aux_octubre === 4) {
      aux_octubre = 0
      valor_octubre = valor_octubre + 3
    }
    else {
      aux_octubre++
      valor_octubre++
    }
  }
  //**********************************************************************************//
  //***********************************NOVIEMBRE******************************************/
  //*******Este bloque imprime las iniciales de los días de la semana acorde al mes(noviembre)***//
  //*******Coloca los valores correspondientes a cadía hábil del mes de noviembre */
  let dias_noviembre = ["L", "M", "Mi", "J", "V"]
  let aux_noviembre = 2 //esta variable empieza en 2 porque en el array "dias" la posición 2 corresponde a "M"(Miércoles)que es el primer día hábil de noviembre.
  let valor_noviembre = 1 //este valor es 2 porque el primer día hábil de noviembre es dos.
  for (let i = 205; i < 227; i++) {
    Data[3][i] = dias_noviembre[aux_noviembre]
    Data[2][i] = valor_noviembre
    Data[0][i] = 11
    if (aux_noviembre === 4) {
      aux_noviembre = 0
      valor_noviembre = valor_noviembre + 3
    }
    else {
      aux_noviembre++
      valor_noviembre++
    }
  }
  //**********************************************************************************//
  //***********************************DICIEMBRE******************************************/
  //*******Este bloque imprime las iniciales de los días de la semana acorde al mes(diciembre)***//
  //*******Coloca los valores correspondientes a cadía hábil del mes de diciembre */
  let dias_diciembre = ["L", "M", "Mi", "J", "V"]
  let aux_diciembre = 4 //esta variable empieza en 4 porque en el array "dias" la posición 4 corresponde a "V"(viernes)que es el primer día hábil de diciembre.
  let valor_diciembre = 1 //este valor es 2 porque el primer día hábil de noviembre es dos.
  for (let i = 228; i < 249; i++) {
    Data[3][i] = dias_diciembre[aux_diciembre]
    Data[2][i] = valor_diciembre
    Data[0][i] = 12
    if (aux_diciembre === 4) {
      aux_diciembre = 0
      valor_diciembre = valor_diciembre + 3
    }
    else {
      aux_diciembre++
      valor_diciembre++
    }
  }
  //**********************************************************************************//

  //*******Este bloque imprime las horas desde las 6 am hasta las 22 horas.******/
  let columns = [0, 21, 45, 66, 90, 113, 135, 159, 181, 204, 227, 249]
  for (let j = 0; j < columns.length; j++) {
    for (let i = 4; i < 20; i++) {
      let aux = i + 3;
      Data[i][columns[j]] = i + 2 + " a " + aux;
    }
  }
  //***********************************************************************************/
  //  let festivos = [20,6,7,1,22,12,19,3,20,7,21,16,6,13,8,25] //este arreglo contiene los festivos del año 2023
  //  let auxFestivos = 0
  //  for(let i=35;i<248;i++){
  //   if(Data[2][i]===festivos[auxFestivos]){
  //     for(let j=4;j<20;j++){
  //       Data[j][i]="F"
  //     }     
  //      auxFestivos++
  //      }
  //  }
  //***********************************************************************************/

  function generarNumero(numero) {
    return (Math.random() * numero).toFixed(0);
  }
  function colorRGB() {
    let color = "(" + generarNumero(250) + "," + generarNumero(250) + "," + generarNumero(250) + ")";
    return "rgb" + color

  }
  const hot = useRef(null)
  //Para borrar toda la programación del año me toca hacerlo mes a mes porque cuando lo hacía todo no refrescaba el navegador y es necesario para que todo quede desde cero.
  function deleteWholeProgramming() {
    for (let i = 1; i <= 20; i++) { //febrero
      for (let j = 4; j <= 21; j++) {
        if (hot.current.hotInstance.getCell(j, i).style.backgroundColor !== 'red') {
          hot.current.hotInstance.getCell(j, i).style.backgroundColor = ""
        }
      }
    }
    for (let i = 1; i <= 44; i++) { //marzo
      for (let j = 4; j <= 21; j++) {
        if (hot.current.hotInstance.getCell(j, i).style.backgroundColor !== 'red') {
          hot.current.hotInstance.getCell(j, i).style.backgroundColor = ""
        }
      }
    }
    window.location.reload()
  }

  //let relleno = function (instance, td, row, col, prop, value,cellProperties){
  //td.style.backgroundColor = colorRGB();
  //hot.current.hotInstance.setCell(row,col).style.backgroundColor = colorRGB()
  //  td.backgroundColor = 'green'
  //   console.log("Esta es la función prueba")
  // }
  // function customRenderer(instance, td) {
  //   //hot.current.hotInstance.renderers.TextRenderer.apply(this, arguments);
  //   td.style.backgroundColor = 'yellow';
  // }

  let coloresDeRellenoGenerados = [] //Este array irá guardando los colores que se generen.
  //let columnaDondeSeGeneraElColor = new Array(coloresDeRellenoGenerados.length) //Este array guarda la columna donde se hace click para saber si el color generado es de cierto mes.

  //function conteoHorasFebrero(cantidadHorasSegunColor = []) {
  function febrero(cantidadHorasSegunColor = []) {
    let aux = 0
    for (let i = 1; i <= 20; i++) {
      for (let j = 4; j <= 19; j++) {
        aux = coloresDeRellenoGenerados.indexOf(hot.current.hotInstance.getCell(j, i).style.backgroundColor.replace(/\s+/g, '')) //https://pixonauta.com/eliminar-espacios-en-blanco-de-un-string-con-javascript/   La expresión regular /\s+/g, '' elimina los espacios que hay en la cadena. La uso porque el background color estaba quedando con espacios rgb(125,  23, 241) y al hacer la comparación con los colores generados pues no habían coincidencias por esos espacios en blanco.       
        if (aux !== -1) {
          cantidadHorasSegunColor[aux]++
          aux = 0
        }
      }
    }
    console.log("cantidadHorasSegunColor en febrero: ", cantidadHorasSegunColor)
    let col = 1
    let totalHoras = 0
    for (let i = 0; i < cantidadHorasSegunColor.length; i++) {
      if (cantidadHorasSegunColor[i] !== 0) {
        hot.current.hotInstance.getCell(21, col).style.backgroundColor = coloresDeRellenoGenerados[i]
        hot.current.hotInstance.getCell(22, col).innerHTML = cantidadHorasSegunColor[i]
        totalHoras = totalHoras + cantidadHorasSegunColor[i]
        hot.current.hotInstance.getCell(22, 16).innerHTML = totalHoras
        col++
      }
    }
  }
  ////MARZO////
  function marzo(cantidadHorasSegunColor = []) {
    for (let i = 0; i < cantidadHorasSegunColor.length; i++) { //Este ciclo llena de ceros el array "cantidadHorasSegunColor" para poder incrementar la cantidad de horas, de lo contrario arroja NaN 
      cantidadHorasSegunColor[i] = 0
    }
    let aux = 0
    for (let i = 22; i <= 44; i++) {
      for (let j = 4; j <= 19; j++) {
        aux = coloresDeRellenoGenerados.indexOf(hot.current.hotInstance.getCell(j, i).style.backgroundColor.replace(/\s+/g, '')) //https://pixonauta.com/eliminar-espacios-en-blanco-de-un-string-con-javascript/   La expresión regular /\s+/g, '' elimina los espacios que hay en la cadena. La uso porque el background color estaba quedando con espacios rgb(125,  23, 241) y al hacer la comparación con los colores generados pues no habían coincidencias por esos espacios en blanco.       
        if (aux !== -1) {
          cantidadHorasSegunColor[aux]++
          aux = 0
        }
      }
    }
    console.log("cantidadHorasSegunColor en marzo: ", cantidadHorasSegunColor)
    let col = 22
    let totalHoras = 0
    for (let i = 0; i < cantidadHorasSegunColor.length; i++) {
      if (cantidadHorasSegunColor[i] !== 0) {
        hot.current.hotInstance.getCell(21, col).style.backgroundColor = coloresDeRellenoGenerados[i]
        hot.current.hotInstance.getCell(22, col).innerHTML = cantidadHorasSegunColor[i]
        totalHoras = totalHoras + cantidadHorasSegunColor[i]
        hot.current.hotInstance.getCell(22, 40).innerHTML = totalHoras
        col++
      }
    }
  }
  //}
  //////////////////////////Trying to implement Redux///////////////////////////////////////////////
  //const initialReduxStoreState = Data
  //const hotSettings = useSelector(state => state);
  //const dispatch = useDispatch()

  // const onBeforeHotChange = changes => {
  //   reduxStore.dispatch({
  //     type: 'updateData',
  //     dataChanges: changes
  //   });
  //   return false
  // }
  // Action reducers for callbacks triggered by Handsontable
  // const updates = (state = initialReduxStoreState, action) => {
  //   switch (action.type) {
  //     case 'updateData':
        //const newData = state.data.slice(0);       
        // for (let [row, column, , newValue] of action.dataChanges) {
        //   newData[row][column] = newValue;
        // }
        // console.log("newData ", newData)
        // return { Data: newData };
  //       const newData = [...state.Data]
  //       action.dataChanges.forEach(([row, column, , newValue]) => {
  //         newData[row][column] = newValue;
  //       })
  //       return {
  //         ...state,
  //         Data: newData
  //       }
  //     default:
  //       return state;
  //   }
  // };

  // const reduxStore = createStore(updates);
  // console.log("Estado inicial ", reduxStore.getState())
  // const settings = reduxStore.getState().updates;
  // console.log("Este es Settings ", settings)
  // reduxStore.subscribe(() => {
  //   console.log("Cambio de estado :", reduxStore.getState())
  // })
  //////////////////End of Trying to implement Redux////////////////////////////////////////////

  return (

    <div className="rejilla" >

      <HotTable
        ref={hot}
        data={Data}
        // rowHeaders={true}
        // colHeaders={true}        
        mergeCells={[{ row: 1, col: 1, rowspan: 1, colspan: 20 }, { row: 1, col: 22, rowspan: 1, colspan: 23 }, { row: 1, col: 46, rowspan: 1, colspan: 20 }, { row: 1, col: 67, rowspan: 1, colspan: 23 }, { row: 1, col: 91, rowspan: 1, colspan: 22 }, { row: 1, col: 114, rowspan: 1, colspan: 21 }, { row: 1, col: 136, rowspan: 1, colspan: 23 }, { row: 1, col: 160, rowspan: 1, colspan: 21 }, { row: 1, col: 182, rowspan: 1, colspan: 22 }, { row: 1, col: 205, rowspan: 1, colspan: 22 }, { row: 1, col: 228, rowspan: 1, colspan: 21 }, { row: 21, col: 16, rowspan: 1, colspan: 5 }, { row: 22, col: 16, rowspan: 1, colspan: 5 }, { row: 21, col: 40, rowspan: 1, colspan: 5 }, { row: 22, col: 40, rowspan: 1, colspan: 5 }]}
        //contextMenu={true}           
        //readOnly={true}
        className='htCenter'
        //Colorea los días festivos  
        cells={function (row, col, prop) {
          let cellProperties = []
          let columnasFestivos = [35, 49, 50, 67, 82, 98, 103, 114, 127, 140, 150, 192, 208, 213, 233, 244,] //este arreglo contiene las posiciones de las columnas de los festivos del año 2023
          for (let i = 0; i < columnasFestivos.length; i++) {
            for (let j = 4; j <= 19; j++) {
              if (row === j && col === columnasFestivos[i]) {
                cellProperties.renderer = backGroundColorFestivos
              }
            }
            //Coloca bordes a la programación
            let columns = [0, 21, 45, 66, 90, 113, 135, 159, 181, 204, 227, 249]
            for (let i = 0; i < columns.length; i++)
              if (row > 3 && row < 20 && col > columns[i] && col < columns[i + 1]) {
                cellProperties.className = 'borders'
              }
          }
          //Bordes de las celdas donde van las horas
          let columnasBordes = [1, 8, 22, 29, 46, 53, 67, 74, 91, 98, 114, 121, 136, 143, 160, 167, 182, 189, 205, 212, 228, 235]
          for (let i = 0; i < columnasBordes.length; i = i + 2) {
            if (row > 20 && row < 23 && col >= columnasBordes[i] && col <= columnasBordes[i + 1]) {
              cellProperties.className = 'borders'
            }
          }
          //Bordes donde va la suma de las horas
          let columnasBordesHoras = [12, 20, 35, 44, 57, 65, 80, 89, 103, 112, 125, 134, 150, 158, 172, 180, 194, 203, 218, 226, 240, 248]
          for (let i = 0; i < columnasBordesHoras.length; i = i + 2) {
            if (row > 20 && row < 23 && col >= columnasBordesHoras[i] && col <= columnasBordesHoras[i + 1]) {
              cellProperties.className = 'borders'
            }
          }
          if (row >= 20 && row <= 23 && col <= 20 && col >= 12) {
            cellProperties.className = 'centrarTexto'
          }
          for (let i = 0; i < 249; i++) { //este ciclo pinta de blanco las fechas de la fila 0.
            if (row === 0 && col === i) { cellProperties.className = 'colorMeses' }
          }

          return cellProperties
        }}
        //Esta función desabilita las celdas en las cuales no se puede iniciar una programación tales como los nombres de los días entre otras.
        beforeOnCellMouseDown={function (event, coords, TD, controller) {
          console.log("Coord.row ", coords.row)
          console.log("Coord.col ", coords.col)
          if (coords.row < 4 || coords.row > 19 || coords.col === 0 || coords.col === 21 || coords.col === 45 || coords.col === 66 || coords.col === 90 || coords.col === 113 || coords.col === 135 || coords.col === 159 || coords.col === 181 || coords.col === 204 || coords.col === 227 || coords.col === 249) {
            event.stopImmediatePropagation()
            console.log("Click en una celda donde no se puede programar")
          }
        }}
        afterOnCellMouseDown={function (event, coords, TD) {

          const color = TD.style.backgroundColor
          let horasDiariasTrabajo = 4

          if (color === "red") { //Detecta si se hizo click en una celda roja(festivo)y arroja un aviso.
            alert("No se puede iniciar programación un día festivo")
          }
          else if (color !== "") {
            alert("No se puede iniciar en la fecha seleccionada porque ya hay un curso programado allí.")
          }

          else if ((coords.row === 19 && horasDiariasTrabajo > 1) || (coords.row === 18 && horasDiariasTrabajo > 2) || (coords.row === 17 && horasDiariasTrabajo > 3) || (coords.row === 16 && horasDiariasTrabajo > 4)) {
            console.log("No se puede programar porque las horas diarias de trabajo exceden las 22 horas")
          }
          else {

            let auxCoordsCol = coords.col
            let horaInicio = coords.row + 2
            let mesInicio = hot.current.hotInstance.getCell(0, coords.col).innerHTML
            let diaInicio = hot.current.hotInstance.getCell(2, coords.col).innerHTML
            let duracionCursoIngresadoPorUsuario = 11
            let duracionCursoExacto = Math.floor(duracionCursoIngresadoPorUsuario / horasDiariasTrabajo) * horasDiariasTrabajo //cociente de la división
            let diaHorasDiariasIncompletas = duracionCursoIngresadoPorUsuario % horasDiariasTrabajo //residuo de la división
            let diasTrabajo = ["L", "M", "", "J", "V"]
            let colorDeRelleno = colorRGB()
            coloresDeRellenoGenerados.push(colorDeRelleno)
            let cantidadHorasSegunColor = new Array(coloresDeRellenoGenerados.length)//Este array se crea con la longitud del array "coloresDeRellenoGenerados" paa guardar la cantidad de horas de cada color

            for (let i = 0; i < cantidadHorasSegunColor.length; i++) { //Este ciclo llena de ceros el array "cantidadHorasSegunColor" para poder incrementar la cantidad de horas, de lo contrario arroja NaN 
              cantidadHorasSegunColor[i] = 0
            }
            console.log("TD ", color)
            console.log("coords.row ", coords.row)
            console.log("coords.col ", coords.col)
            console.log("diasHorasDiariasExactas ", duracionCursoExacto)
            console.log("diaHorasDiariasIncompletas ", diaHorasDiariasIncompletas)
            console.log("Hora de inicio ---> ", horaInicio)
            console.log("Fecha de inicio ---> ", diaInicio + "/" + mesInicio)
            console.log("coloresDeRellenoGenerados: ", coloresDeRellenoGenerados)


            while (duracionCursoExacto !== 0) {
              let nombreDiaInicioCurso = hot.current.hotInstance.getCell(3, coords.col).innerHTML
              if (nombreDiaInicioCurso === diasTrabajo[0] || nombreDiaInicioCurso === diasTrabajo[1] || nombreDiaInicioCurso === diasTrabajo[2] || nombreDiaInicioCurso === diasTrabajo[3] || nombreDiaInicioCurso === diasTrabajo[4]) {
                for (let i = coords.row; i < horasDiariasTrabajo + coords.row; i++) { //A las horas diaras de trabajo le sumo la fila donde inicia el curso y el "for" va hasta una unidad antes de esta suma lo que permite rellenar las celdas según la cantidad de horas diarias de trabajo. Ejemplo: si el curso inicia en la fila 2 y la cantidad de horas diaria de trabajo son 3 entonces 2+3 = 5 lo que significa que el for va hasta 4 empezando desde el 2 
                  if (hot.current.hotInstance.getCell(i, coords.col).style.backgroundColor === "") {
                    hot.current.hotInstance.getCell(i, coords.col).style.backgroundColor = colorDeRelleno
                    //hot.current.hotInstance.setCellMeta(i, coords.col,'className','colorDeRelleno')    
                   
                                                                      
                  }

                  else {
                    if (hot.current.hotInstance.getCell(i, coords.col).style.backgroundColor === 'red') {
                      console.log("Encontré un festivo")
                      coords.col = coords.col + 1
                      i = i - 1
                      console.log("Siguiente día después del festivo encontrado ", hot.current.hotInstance.getCell(3, coords.col).innerHTML)

                    }
                    else {
                      console.log("Valor de coords.col ", coords.col)
                      let nombreDiaCruce = hot.current.hotInstance.getCell(3, coords.col).innerHTML
                      let numeroDiaCruce = hot.current.hotInstance.getCell(2, coords.col).innerHTML
                      let mesCruce = hot.current.hotInstance.getCell(0, coords.col).innerHTML
                      let horaCruce = i + 2
                      coloresDeRellenoGenerados.pop()//Esta línea elimina el último color generado pues no es necesario ya que si llega a este punto es porque hay un cruce de horas.                      
                      console.log("coloresDeRellenoGenerados después de pop ", coloresDeRellenoGenerados)
                      console.log("No se puede programar porque hay un cruce de horario en la fecha: ", nombreDiaCruce + " " + numeroDiaCruce + "/" + mesCruce, "a las ", horaCruce, "horas.")
                      for (let j = coords.col - 1; j >= auxCoordsCol; j--) { //Este ciclo rellena de blanco hacia la izquierda cuando hay un cruce(deshace lo que pinto)
                        nombreDiaInicioCurso = hot.current.hotInstance.getCell(3, j).innerHTML
                        if (nombreDiaInicioCurso === diasTrabajo[0] || nombreDiaInicioCurso === diasTrabajo[1] || nombreDiaInicioCurso === diasTrabajo[2] || nombreDiaInicioCurso === diasTrabajo[3] || nombreDiaInicioCurso === diasTrabajo[4]) {
                          for (let a = 0; a < horasDiariasTrabajo; a++) {
                            hot.current.hotInstance.getCell(coords.row + a, j).style.backgroundColor = ""
                          }
                        }
                      }
                      for (let h = coords.row; h <= i - 1; h++) { hot.current.hotInstance.getCell(h, coords.col).style.backgroundColor = "" }//este ciclo rellena de blanco las celdas hacia arriba, es decir, cuando hay un cruce hacia abajo                       
                      return //finaliza el for y no sigue tratando de rellenar las celdas.
                    }
                  }
                }
                duracionCursoExacto = duracionCursoExacto - horasDiariasTrabajo

                coords.col = coords.col + 1
              }
              else {
                coords.col = coords.col + 1
              }
            }
            //Este ciclo pinta el día restante con las horas que sobran, es decir, las incompletas.
            while (diaHorasDiariasIncompletas !== 0) {
              let nombreDiaInicioCurso = hot.current.hotInstance.getCell(3, coords.col).innerHTML
              console.log("Nombre dia después del While ", nombreDiaInicioCurso)
              if (nombreDiaInicioCurso === diasTrabajo[0] || nombreDiaInicioCurso === diasTrabajo[1] || nombreDiaInicioCurso === diasTrabajo[2] || nombreDiaInicioCurso === diasTrabajo[3] || nombreDiaInicioCurso === diasTrabajo[4]) {
                for (let i = 0; i < diaHorasDiariasIncompletas; i++) {
                  if (hot.current.hotInstance.getCell(coords.row + i, coords.col).style.backgroundColor === "") {
                    hot.current.hotInstance.getCell(coords.row + i, coords.col).style.backgroundColor = colorDeRelleno
                  }
                  else {
                    if (hot.current.hotInstance.getCell(coords.row + i, coords.col).style.backgroundColor === 'red') {
                      coords.col = coords.col + 1
                      i = i - 1
                    }
                    else {
                      let diaCruce = hot.current.hotInstance.getCell(2, coords.col).innerHTML
                      let mesCruce = hot.current.hotInstance.getCell(0, coords.col).innerHTML
                      let horaCruce = (coords.row + i) + 2 //En coords.row es donde ocurre el cruce entonces le sumo 2 para obtener la hora del cruce.
                      coloresDeRellenoGenerados.pop()//Esta línea elimina el último color generado pues no es necesario ya que si llega a este punto es porque hay un cruce de horas.
                      //columnaDondeSeGeneraElColor.pop()//Esta línea elimina la posición de la columna donde se hizo click pues al haber un cruce no es necesario dicha posición
                      console.log("coloresDeRellenoGenerados después de pop ", coloresDeRellenoGenerados)
                      console.log("No se puede programar porque hay un cruce en ", diaCruce + "/" + mesCruce, "a las", horaCruce, "horas")
                      for (let p = i - 1; p >= 0; p--) {
                        hot.current.hotInstance.getCell(coords.row + p, coords.col).style.backgroundColor = ""
                      }
                      for (let j = coords.col - 1; j >= auxCoordsCol; j--) { //Este ciclo rellena de blanco hacia la izquierda cuando hay un cruce(deshace lo que pinto)
                        nombreDiaInicioCurso = hot.current.hotInstance.getCell(3, j).innerHTML
                        if (nombreDiaInicioCurso === diasTrabajo[0] || nombreDiaInicioCurso === diasTrabajo[1] || nombreDiaInicioCurso === diasTrabajo[2] || nombreDiaInicioCurso === diasTrabajo[3] || nombreDiaInicioCurso === diasTrabajo[4]) {
                          for (let a = 0; a < horasDiariasTrabajo; a++) {
                            hot.current.hotInstance.getCell(coords.row + a, j).style.backgroundColor = ""
                          }
                        }
                      }
                      return
                    }
                  }
                }
                diaHorasDiariasIncompletas = 0
              }
              else {
                coords.col++
              }

            }
            //conteoHorasFebrero()
            const iterable = [febrero(cantidadHorasSegunColor), marzo(cantidadHorasSegunColor)]
            Promise.all(iterable)
              .then(function (results) { console.log("Se leyeron los colores de febrero y marzo:", results) })
              .catch(function (err) { console.log(err) })
          }

        }}



        // }}
        // cells = {function(row,col,prop){
        //   let columnasFestivos = [35,49,50,67,82,98,103,114,127,140,150,192,208,213,233,244,] //este arreglo contiene las posiciones de las columnas de los festivos del año 2023
        //   let cellProperties = []
        //   for(let i=0;i<columnasFestivos.length;i++){ //este ciclo rellena de color rojo los festivos.
        //     if(row >=4 && row <=19 && col === columnasFestivos[i] ){
        //             cellProperties.className = 'celdas' }                  
        //   }
        //   for(let i=0;i<249;i++){ //este ciclo pinta de blanco las fechas de la fila 0.
        //   if(row===0 && col===i){cellProperties.className = 'celdas2'}}
        //   return cellProperties }}

        //beforeChange={onBeforeHotChange}
        //afterChange={onBeforeHotChange}
        //{...hotSettings}
        hiddenRows={true}
        //hiddenRows = {rows = {2}}
        //cell={[{row:0, col:5, className:'celdas'},{row:6, col:1, className:'celdas'},{row:5, col:8, className:'celdas'}]}             
        //cell={[{row:0, col:4,renderer:myRenderer}]}
        colWidths={[60, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 29, 60, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 60, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 60, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 60, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 60, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 60, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 60, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 60, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 60, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 60, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 60]} //ancho de las columnas en orden de izquierda a derecha                        
        licenseKey='non-commercial-and-evaluation' // for non-commercial use only
      >
      </HotTable>
      <div>
        <button onClick={deleteWholeProgramming}>Borrar toda la programación del año</button>
        {/* <button onClick={selectCelljelm48}>BackgroundColor</button> */}
      </div>
    </div>

  )

}//rejilla

//}
export default Rejilla;

