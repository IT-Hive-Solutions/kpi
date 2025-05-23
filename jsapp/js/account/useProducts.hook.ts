import { createContext } from 'react'

import { when } from 'mobx'
import { getProducts } from '#/account/stripe.api'
import type { Product } from '#/account/stripe.types'
import envStore from '#/envStore'
import { useApiFetcher, withApiFetcher } from '#/hooks/useApiFetcher.hook'

export interface ProductsState {
  products: Product[]
  isLoaded: boolean
}

const INITIAL_PRODUCTS_STATE: ProductsState = Object.freeze({
  products: [],
  isLoaded: false,
})

const loadProducts = async () => {
  await when(() => envStore.isReady)
  if (!envStore.data.stripe_public_key) {
    return {
      products: [],
      isLoaded: true,
    }
  }
  const products = await getProducts()
  return {
    products: products.results,
    isLoaded: true,
  }
}

export const useProducts = () => useApiFetcher(loadProducts, INITIAL_PRODUCTS_STATE)

export const ProductsContext = createContext(withApiFetcher(INITIAL_PRODUCTS_STATE))
