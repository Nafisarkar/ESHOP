import { useProductStore } from '@/store/product';
import { Box, Button, Heading, HStack, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { toaster } from './toaster';
import { Field } from "@/components/ui/field"

import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
const ProductCard = ({ product }) => {

  const [updatedProduct, setUpdatedProduct] = useState(product);

  const { deleteProduct, updateProduct } = useProductStore();
  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    toaster.create({
      title: message,
      description: product.name,
      type: success ? "success" : "error",
      duration: 2000,
    })
  }

  const handleUpdateProduct = async (pid, updatedProduct) => {
    await updateProduct(pid, updatedProduct);
    toaster.create({
      title: "Product updated successfully",
      description: product.name,
      type: "success",
      duration: 2000,
    })
  }

  return (
    <Box
      height={'400px'}
      shadow={'lg'}
      rounded={'lg'}
      overflow={'hidden'}
      transition={'all 0.3s'}
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
      animation={{
        base: "slideInLeft 0.5s ease-in-out forwards",
        sm: "slideInLeft 0.5s ease-in-out forwards"
        
      }}
    >
      <Image src={product.image} alt={product.name} h={'250px'} w={"full"} objectFit={'cover'}></Image>

      <Box h={'full'} p={'5'}>
        <Heading as={'h3'} size={'md'} mb={'2'} style={{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{product.name}</Heading>
        <Text mb={'4'} fontWeight={'bold'} fontSize={'md'}>${product.price}</Text>

        <HStack spacing={'4'}>

          <HStack wrap="wrap" gap="4" >
            <DialogRoot
              key='Center'
              placement='center'
              motionPreset="slide-in-bottom"
            >
              <DialogTrigger asChild >
                <Button bg={'blue.300'}
               
                ><FaRegEdit /></Button>
              </DialogTrigger>
              <DialogContent margin={'8'}>
                <DialogHeader>
                  <DialogTitle>Update Product Details</DialogTitle>
                </DialogHeader>
                <DialogBody>
                  <Field mb={'4'} >
                    <Input type="text" placeholder='Product Name' defaultValue={updatedProduct.name} name='name' 
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                    />
                  </Field>
                  <Field mb={'4'}>
                    <Input type="number" placeholder='Product Price' 
                    defaultValue={updatedProduct.price} name='price'
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                    />
                  </Field>
                  <Field>
                    <Input type="text"  placeholder='Product Image'
                    defaultValue={updatedProduct.image} name='image'
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                    />
                  </Field>
                </DialogBody>
                <DialogFooter>
                  <DialogActionTrigger asChild>
                    <Button variant="outline"
                    onClick={() => {
                      handleUpdateProduct(product._id, updatedProduct);
                      
                    }}
                    >Update</Button>
                  </DialogActionTrigger>
                  <Button
                  onClick={() => {
                    document.querySelector('.chakra-dialog__closeTrigger').click();
                  }}
                  >Close</Button>
                </DialogFooter>
                <DialogCloseTrigger />
              </DialogContent>
            </DialogRoot>
          </HStack>

          <Button bg={'red.300'} onClick={() => handleDeleteProduct(product._id
          )}><RiDeleteBin2Line /></Button>


        </HStack>
      </Box>

    </Box>
  )
}

export default ProductCard
