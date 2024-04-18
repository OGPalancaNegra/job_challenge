import React, {useState, useEffect} from 'react'
import { getSchoolListRequest, updateEverySchool } from '../api/escola';
import { updateArray } from '../functions';

const Index = () => {
    const [mainList, updateMainList] = useState([])


    const preventMinus = (e) => {
      if (e.code === 'Minus') {
          e.preventDefault();
      }
  };


    const onTableChange = (e, id)=>{
    
      preventMinus(e)
      const {name, value} = e.target
      console.log(name)
      console.log(value)

      
      const updatedData = [...mainList];
      updatedData[id][name] = parseInt(value);
      updateMainList(updatedData);
  }
  
  
    useEffect(()=>{
      getSchoolListRequest(updateMainList)
    },[])


    const onUpdateClick = (e) =>{
      e.preventDefault()

      updateEverySchool(mainList)
      
    }

  
    
  
    console.log(mainList)
  return (
    <div className='content-parent' >
        <h3>Editar [Designação da Escola]</h3>
        <table>
        <tr>
          <th>Designação</th>
          <th style={{textAlign:"left"}}>Funcionais</th>
          <th style={{textAlign:"left"}}>Não Funcionais</th>
          <th style={{textAlign:"left"}}>Numero Total</th>
        </tr>
        {mainList.map((el,index)=>{
          return <tr>
            <td>{el.designacao}</td>
            {el.designacao === "Salas de Aulas Teóricas" ? <td><input style={{backgroundColor:"#b7b7b7"}} min={0}  type="number" name='funcionais' value={0}/></td> :<td><input min={0}  type="number" name='funcionais' value={el.funcionais} onChange={(e)=>onTableChange(e, index) }/></td>} 

            {el.designacao === "Salas de Aulas Teóricas" ? <td><input style={{backgroundColor:"#b7b7b7"}} min={0}  type="number" name='disfuncionais' value={0}/></td> :<td><input min={0}  type="number" name='disfuncionais' value={el.disfuncionais} onChange={(e)=>onTableChange(e, index) }/></td>}
    
            {el.designacao === "Salas de Aulas Teóricas" ? <td><input style={{backgroundColor:"#b7b7b7"}} min={0}  type="number" name='numero_total' value={0}/></td> :<td><input min={0}  type="number" name='numero_total' value={parseInt(el.funcionais) + parseInt(el.disfuncionais)}/></td>}

            </tr>
        })}


        </table>
        <button onClick={onUpdateClick}>Actualizar</button>
    </div>
  )
}

export default Index
