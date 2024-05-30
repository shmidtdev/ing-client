import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {Button} from "@/components/ui/button";
import axios from "axios";
import {host} from "@/env";

const fileTypes = ["JPG", "PNG", "GIF"];

interface IDropProps {
  productId: string
}

function DragDrop({productId} : IDropProps) {
  const [files, setFiles] = useState<File[]>([]);
  
  const handleChange = (files:any) => {
    setFiles(files);
    console.log(files)
  };

  function readFileDataAsBase64(file : File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        resolve(event.target?.result);
      };

      reader.onerror = (err) => {
        reject(err);
      };

      reader.readAsDataURL(file);
    });
  }
  
  const handleSave = async () => {
    let images : string [] = []
    
    for(let i = 0; i < files.length; i++){
      //@ts-ignore
      images.push(await readFileDataAsBase64(files[i]))
    }
    
    console.log(images)
    
    let data = {
      productId: productId,
      images: images
    }
    
    console.log(await readFileDataAsBase64(files[0]))

    axios.post(`${host}/api/product/attachimages`, data)
  }
  
  return (
    <>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} label="Перетащи сюда файлы с картинками"
                    hoverTitle="Отпусти тут" multiple={true}>
        <div className="border-2 border-customRed rounded-lg p-4 hover:bg-customRed/20 cursor-pointer">
          {files.length > 0 && 
            <div>Загружено</div>
          }
          {
            !files.length && 
            <div>Перетащи сюда картинки</div>
          }
        </div>
      </FileUploader>
      <div className="w-full">
        <Button className="mt-6 w-full" disabled={!files.length} onClick={handleSave}>Загрузить</Button>
      </div>
    </>
  );
}

export default DragDrop;