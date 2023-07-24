import React, { useEffect, useState } from "react";
import * as XLSX from 'xlsx'
const ExportSheet=(data)=>{
    const [sheetData,setSheetData]=useState(null);

    const handleSetSheetData=()=>{
        setSheetData(data.data)
    }

    useEffect(
        ()=>{
            setSheetData(data.data)
        }
    ,[])
    
    const onExport=()=>{
        


        var wb=XLSX.utils.book_new();
        wb.Props={
            Title:"Test",
            Subject:"file",
            Author:"me",
            CreatedDate:new Date(2023,5,25)
        }
        
            for(let i=0;i<sheetData.length;i++){
                var ws=XLSX.utils.aoa_to_sheet(sheetData[i])
            
                XLSX.utils.book_append_sheet(wb,ws,"sheet"+i)
            }
            
            
           
            XLSX.writeFileXLSX(wb,"MyFile.xlsx")
    }
    return(
        <button onClick={onExport}>adad</button>
    )
}

export default ExportSheet