import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaPhotoVideo } from 'react-icons/fa'
import "./CreatePostModal.css"
import { GrEmoji } from 'react-icons/gr'
import { GoLocation } from 'react-icons/go'

const CreatePostModal = ({onClose,isOpen}) => {
    const[isDragOver,setisDragOver]=useState(false);
    const [file,setFile]=useState();
    const [caption,setCaption]=useState("");
    const handleDrop=(event)=>{
            event.preventDefault();
            const droppedFile=event.dataTransfer.file[0];
            if(droppedFile.type.startsWith("image/")  || droppedFile.type.startsWith("image/")){
                setFile(droppedFile)
            }
    }
    const handleDragOver=(event)=>{
        event.preventDefault();
        event.dataTransfer.dropEffect="copy";
        setisDragOver(true);
    }
    const handleDragLeave=()=>{
        setisDragOver(false);
    }
    const handleonChange=(e)=>{
        const file=e.target.files[0];
        if(file && (file.type.startsWith("image/") || file.type.startsWith("video/"))){
            setFile(file);
        }
        else{
            setFile(null);
            alert("Please select an image or video")
        }
    }
    const handleCaptionChange=(e)=>{
        setCaption(e.target.value)
    }
  return (
    <div>
        <Modal size ={"4xl"}onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div className='flex justify-between py-1 px-10 items-center'>
           <p>Create new post</p>
           <Button className='' variant={"ghost"} size="sm" colorScheme={'blue'}>
            share
           </Button>
          </div>
          <hr />
          <ModalBody>
           <div className='h-[70vh] pb-5 flex'>
            <div className='w-[50]'>
                {!file && <div onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className='drag-drop h-full'
                >
                    <div className=''>
                        <FaPhotoVideo className='text-3xl '/>
                        <p>Drag photos or videos here</p>
                    </div>
                    <label htmlFor='file-upload' className='custom-file-upload'> Select from computer</label>
                    <input className='fileInput' type='file' id="file-upload" accept='image/*, video/*' onChange={handleonChange}/>
                    
                </div>}
                {file && <img className='max-h-full' src=
                {URL.createObjectURL(file)} alt="" />}
                
            </div>
            <div className='w-[1px] border
                h-full'></div>
                <div className='w-[64%]'>
                    <div className='flex items-center '>
                        <img className='w-7 h-7 rounded-full' src="logo.png" alt="" /> 
                        <p className='font-semibold ml-4'>Username</p>
                    </div>
                   <div className='px-2'>
                    <textarea placeholder="Write a caption" className='captionInput' name ="caption" rows="8"
                    onChange={handleCaptionChange}
                    ></textarea>
                   </div>
                   <div className='flex justify-between px-2'>
                    <GrEmoji />
                    <p className='opacity-70'>{caption?.length}/ 2,200</p>
                   </div>
                   <hr />

                   <div className='p-2 flex justify-between items-center'>
                    <input className='locationInput' type="text" placeholder='Location' name='location' />
                    <GoLocation />
                   </div>
                   <hr />
                </div>
             
           </div>
          </ModalBody>
          
        </ModalContent>
      </Modal>
        
    </div>
  )
}

export default CreatePostModal