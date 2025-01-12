
import { Center } from '@chakra-ui/react';
import { Button, Card, Input, Stack } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { useState } from "react";
import { useProductStore } from '@/store/product';
import { toaster } from "@/components/ui/toaster"
const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  })


  const { createProduct } = useProductStore()
  const handleAddProduct = async() => {
    const { success, message } = await createProduct(newProduct);
    toaster.create({
      title: message  ,
      description: newProduct.name,
      type: success ? "success" : "error",
      duration: 1000,
    })

    
    setNewProduct({
      name: "",
      price: "",
      image: "",
    })
  };


  return (
    <>
      <Center p={"8"} h="max" maxH="100vh">
      <Card.Root maxW="lg" w="svh">
    <Card.Header>
      <Card.Title color={'blue.500'} style={{ fontWeight: 'bold' }} >Add a new product</Card.Title>
    </Card.Header>
    <Card.Body>
      <Stack gap="2" >
        <Field >
          <Input placeholder='Product Name'
          name='name'
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
        </Field>
        <Field >
          <Input placeholder='Product Price'
          price='price'
          type='number'
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
        </Field>
        <Field>
          <Input placeholder='Image URL'
          image='image'
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          />
        </Field>
      </Stack>
    </Card.Body>
    <Card.Footer justifyContent="flex-end">
      <Button variant="surface"
      color={'blue.500'}
      onClick={handleAddProduct}
      style={{ fontWeight: 'bold' }}
      >Add Product</Button>
    </Card.Footer>
  </Card.Root>
      </Center >
    </>
  )
}

export default CreatePage
