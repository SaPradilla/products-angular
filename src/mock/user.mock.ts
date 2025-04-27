import { Product } from "../app/core/models/products.interface"

export const UserOneMock:Product = {
    id: "1",
    categoryId: 1,
    name: "Apple 13” Macbook Pro",
    description: "Macbook mate",
    amount: 6,
    brand: "Apple",
    value: 300,
    image: "https://www.alkosto.com/medias/194252425909-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w2NjYyfGltYWdlL3dlYnB8YURKbEwyaGhNeTh4TkRJNU9USTRPREUwTVRnMU5DOHhPVFF5TlRJME1qVTVNRGxmTURBeFh6YzFNRmQ0TnpVd1NBfDFkODc2NTk2MDlhNDEzMjY3ZjEyMWU0ODMzYjU0NTVkOGFmNTczODdiZDY3Mjc4ODhlNmY0MjE1ZTBhNzc1NDU",
    liked: false,
    status: true,
    category: [
      {
        id: 1,
        name: "Tecnologia"
      }
    ]
}


export const UserAllMock:Product[] = [
    {
      id: "1",
      categoryId: 1,
      name: "Apple 13” Macbook Pro",
      description: "Macbook mate",
      amount: 6,
      brand: "Apple",
      value: 300,
      image: "https://www.alkosto.com/medias/194252425909-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w2NjYyfGltYWdlL3dlYnB8YURKbEwyaGhNeTh4TkRJNU9USTRPREUwTVRnMU5DOHhPVFF5TlRJME1qVTVNRGxmTURBeFh6YzFNRmQ0TnpVd1NBfDFkODc2NTk2MDlhNDEzMjY3ZjEyMWU0ODMzYjU0NTVkOGFmNTczODdiZDY3Mjc4ODhlNmY0MjE1ZTBhNzc1NDU",
      liked: false,
      status: true,
      category: [
        {
          id: 1,
          name: "Tecnologia"
        }
      ]
    },
    {
      id: "3",
      categoryId: 1,
      name: "TV SAMSUNG 43 Pulgadas",
      description: "Tv",
      amount: 10,
      brand: "Samsung",
      value: 300,
      image: "https://www.alkosto.com/medias/8806094845235-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w1MDYwOHxpbWFnZS93ZWJwfGFEVmlMMmc0Wmk4eE5ETTFORFl5TmpFMU1EUXpNQzg0T0RBMk1EazBPRFExTWpNMVh6QXdNVjgzTlRCWGVEYzFNRWd8YTkwYTAxYjMxMDNjOGZmYjdmMTQ0ZDAxZGFkNDQxMGQxODA0M2IyYjc5ZTE3N2I2MWZlNWEzNzFmNTRhYWY2Yw",
      liked: false,
      status: true,
      category: [
        {
          id: 1,
          name: "Tecnologia"
        }
      ]
    },
    {
      id: "4",
      categoryId: 1,
      name: "Playstation 5 1TB",
      description: "Play 5 wifi 1tb",
      amount: 10,
      brand: "Playstation",
      value: 80,
      image: "https://www.alkosto.com/medias/711719573432-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMDA4NnxpbWFnZS93ZWJwfGFHUXlMMmhpTXk4eE5ETTJOakkxTnpZM05qTXhPQzgzTVRFM01UazFOek0wTXpKZk1EQXhYemMxTUZkNE56VXdTQXw5ODM4YTFmNWU1ZDBjMjZmN2Q4OGMyNDAzMDdlNTcxOTJkMjE3ZDkzNzAyODAxMDhhOWMxN2RmNjdjMzljNzk3",
      liked: false,
      status: false,
      category: [
        {
          id: 1,
          name: "Tecnologia"
        }
      ]
    },
    {
      id: "5",
      categoryId: 1,
      name: "Timón + Pedales LOGITECH",
      description: "Volante para jugar a los carritos",
      amount: 8,
      brand: "Lenovo",
      value: 80,
      image: "https://www.alkosto.com/medias/097855146687-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzMzczNHxpbWFnZS93ZWJwfGFEVXlMMmhrWkM4eE5ETXdNVEl5TURjek1qazFPQzh3T1RjNE5UVXhORFkyT0RkZk1EQXhYemMxTUZkNE56VXdTQXw3MzAzMzkyNmVjNGJkNTIyYmI0M2RkNmI3M2RiZDE5ZTdhMWMwM2Y3NDFjYzM5YzUxYmQ2MzBlMGE0MzM3ZWJk",
      liked: false,
      status: true,
      category: [
        {
          id: 1,
          name: "Tecnologia"
        }
      ]
    },
    {
      id: "6",
      categoryId: 1,
      name: "Audífonos de Diadema PS5",
      description: "Audifonos blancos",
      amount: 8,
      brand: "Playstation",
      value: 80,
      image: "https://www.alkosto.com/medias/711719540892-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMDEwNnxpbWFnZS93ZWJwfGFHVTJMMmcxWlM4eE5ESTVORGswTkRZME5URTFNQzgzTVRFM01UazFOREE0T1RKZk1EQXhYemMxTUZkNE56VXdTQXw1NmYxNTdhMmIwZGVlMTRmZjNhNDM3MzgyYjg3ZjlhM2VjM2NmODE5ZGJlNGYyMmIyNGE0NmRlZTFhZjExNTFm",
      liked: false,
      status: true,
      category: [
        {
          id: 1,
          name: "Tecnologia"
        }
      ]
    },
    {
      id: "7",
      categoryId: 1,
      name: "Apple 13” Macbook Pro",
      description: "Macbook mate",
      amount: 6,
      brand: "Apple",
      value: 300,
      image: "https://www.alkosto.com/medias/194252425909-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w2NjYyfGltYWdlL3dlYnB8YURKbEwyaGhNeTh4TkRJNU9USTRPREUwTVRnMU5DOHhPVFF5TlRJME1qVTVNRGxmTURBeFh6YzFNRmQ0TnpVd1NBfDFkODc2NTk2MDlhNDEzMjY3ZjEyMWU0ODMzYjU0NTVkOGFmNTczODdiZDY3Mjc4ODhlNmY0MjE1ZTBhNzc1NDU",
      liked: false,
      status: true,
      category: [
        {
          id: 1,
          name: "Tecnologia"
        }
      ]
    },
    {
      id: "8",
      categoryId: 1,
      name: "Apple 14” Macbook Pro",
      description: "Macbook mate",
      amount: 6,
      brand: "Apple",
      value: 300,
      image: "https://www.alkosto.com/medias/194252425909-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w2NjYyfGltYWdlL3dlYnB8YURKbEwyaGhNeTh4TkRJNU9USTRPREUwTVRnMU5DOHhPVFF5TlRJME1qVTVNRGxmTURBeFh6YzFNRmQ0TnpVd1NBfDFkODc2NTk2MDlhNDEzMjY3ZjEyMWU0ODMzYjU0NTVkOGFmNTczODdiZDY3Mjc4ODhlNmY0MjE1ZTBhNzc1NDU",
      liked: false,
      status: true,
      category: [
        {
          id: 1,
          name: "Tecnologia"
        }
      ]
    },
    {
      id: "10",
      categoryId: 1,
      name: "Log",
      description: "esbonito",
      amount: 40,
      brand: "Lenovo",
      value: 3400000,
      image: "https://www.alkosto.com/medias/194252425909-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w2NjYyfGltYWdlL3dlYnB8YURKbEwyaGhNeTh4TkRJNU9USTRPREUwTVRnMU5DOHhPVFF5TlRJME1qVTVNRGxmTURBeFh6YzFNRmQ0TnpVd1NBfDFkODc2NTk2MDlhNDEzMjY3ZjEyMWU0ODMzYjU0NTVkOGFmNTczODdiZDY3Mjc4ODhlNmY0MjE1ZTBhNzc1NDU",
      liked: false,
      status: true,
      category: [
        {  id: 1,
            name: "Tecnologia"
        }
      ]
    },
    {
      id: "11",
      categoryId: 10,
      name: "Tostadora",
      description: "Es una tostadora",
      amount: 20,
      brand: "Apple",
      value: 300,
      image: "https://www.alkosto.com/medias/711719540892-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMDEwNnxpbWFnZS93ZWJwfGFHVTJMMmcxWlM4eE5ESTVORGswTkRZME5URTFNQzgzTVRFM01UazFOREE0T1RKZk1EQXhYemMxTUZkNE56VXdTQXw1NmYxNTdhMmIwZGVlMTRmZjNhNDM3MzgyYjg3ZjlhM2VjM2NmODE5ZGJlNGYyMmIyNGE0NmRlZTFhZjExNTFm",
      liked: false,
      status: true,
      category: [
        {
          id: 10,
          name: "sculptures"
        }
      ]
    },
    {
      id: "12",
      categoryId: 4,
      name: "Producto",
      description: "Es muy bonito",
      amount: 30,
      brand: "Apple",
      value: 3130000,
      image: "imagen",
      liked: false,
      status: true,
      category: [
        {
          id:4,
          name: "uno colombia edition"
        }
      ]
    }
  ]