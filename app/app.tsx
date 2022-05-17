import React, { useState, useEffect } from "react"
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { persistCache } from "apollo3-cache-persist"
import AsyncStorage from "@react-native-async-storage/async-storage"

import * as storage from "./utils/storage"
import { AppNavigator, useNavigationPersistence } from "./navigators"
import { ErrorBoundary } from "./screens/error/error-boundary"

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"

const cache = new InMemoryCache()

// Initialize Apollo Client
const client = new ApolloClient({
  uri: process.env.GRAPHQL_SERVER,
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
})

/**
 * This is the root component of our app.
 */
function App() {
  // const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)
  const [loadingCache, setLoadingCache] = useState<boolean>(true)
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY)

  useEffect(() => {
    persistCache({
      cache,
      storage: AsyncStorage,
    }).then(() => setLoadingCache(false))
  }, [])

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color.
  // In iOS: application:didFinishLaunchingWithOptions:
  // In Android: https://stackoverflow.com/a/45838109/204044
  // You can replace with your own loading component if you wish.
  // if (!rootStore || !isNavigationStateRestored) return null
  if (loadingCache) return null

  return (
    // <RootStoreProvider value={rootStore}>
    <ApolloProvider client={client}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ErrorBoundary catchErrors={"always"}>
          <AppNavigator
            initialState={initialNavigationState}
            onStateChange={onNavigationStateChange}
          />
        </ErrorBoundary>
      </SafeAreaProvider>
    </ApolloProvider>
    // </RootStoreProvider>
  )
}

export default App
