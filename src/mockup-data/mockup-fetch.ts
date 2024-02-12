import React from 'react'

export default function MockupFetchService() {
  // Try to create await fuction that will return data for 1000ms
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([])
    }, 1000)
  })
}
