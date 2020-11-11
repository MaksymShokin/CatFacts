import React, { useCallback, useState } from 'react'
import { View, FlatList, Text, ActivityIndicator } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { useSelector, useDispatch } from 'react-redux'
import CustomButton from '../components/CustomButton'
import { saveFacts, CatsRequest } from '../store/rootReducer/catFactsReducer'
import { DefaultRootState } from '../store/rootReducer'

interface CatFactsTypes {
  loadFacts: () => Promise<void>
  isLoading: boolean
}

const ListHeaderComponent = ({ loadFacts, isLoading }: CatFactsTypes) => {
  return (
    <View style={styles.listHeaderContainer}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <CustomButton text="Load more" onPress={loadFacts} />
      )}
    </View>
  )
}

const renderItem = ({ item }: { item: CatsRequest }) => {
  return (
    <View style={styles.catFactsItem}>
      <Text>{item.text}</Text>
    </View>
  )
}

const CatFactsScreen = () => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const facts = useSelector((state: DefaultRootState) => state.catFacts?.facts)

  const loadFacts = useCallback(async () => {
    try {
      setIsLoading(true)
      const resData = await fetch(
        `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=3`
      )
      const parsedData = await resData.json()
      dispatch(saveFacts(parsedData))
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [dispatch])

  return (
    <FlatList
      contentContainerStyle={styles.flatList}
      data={facts}
      keyExtractor={(item: { _id: string; text: string }) =>
        item._id + new Date()
      }
      renderItem={renderItem}
      ListHeaderComponent={
        <ListHeaderComponent loadFacts={loadFacts} isLoading={isLoading} />
      }
    />
  )
}

const styles = ScaledSheet.create({
  listHeaderContainer: {
    width: '100%',
    alignItems: 'center',
    height: '120@ms',
    justifyContent: 'center'
  },
  flatList: {
    paddingBottom: '30@ms'
  },
  catFactsItem: {
    marginVertical: '10@ms',
    paddingHorizontal: '20@ms'
  }
})

export default CatFactsScreen
