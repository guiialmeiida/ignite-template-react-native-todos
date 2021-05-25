import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface MyTasksListProps {
  isDark: boolean,
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

interface theme {
  isDark: boolean
}

function FlatListHeaderComponent({ isDark }: theme) {
  return (
    <View>
      <Text style={[
        styles.header,
        isDark ? styles.darkTextColor : styles.lightTextColor,
      ]}>Minhas tasks</Text>
    </View>
  )
}

export function MyTasksList({ tasks, onLongPress, onPress, isDark }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={[
              item.done && isDark ? [styles.taskButton, styles.darkTaskButtonDone] : styles.taskButton,
              item.done && !isDark ? [styles.taskButton, styles.lightTaskButtonDone] : styles.taskButton
            ]}
          >
            <View
              testID={`marker-${index}`}
              style={[
                styles.taskMarker,
                item.done && isDark ? styles.darkTaskMarkerDoneColor : styles.darkTaskMarkerColor,
                item.done && !isDark ? styles.lightTaskMarkerDoneColor : styles.lightTaskMarkerColor,
                isDark ? styles.darkTaskMarkerColor : styles.lightTaskMarkerColor
              ]}
            />
            <Text
              style={[
                isDark ? styles.darkTextColor : styles.lightTextColor,
                item.done && styles.taskTextDone
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent isDark={isDark} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  },
  darkTextColor: {
    color: '#E1E1E6'
  },
  lightTextColor: {
    color: '#3D3D4D'
  },
  darkTaskButtonDone: {
    backgroundColor: '#413A6F'
  },
  lightTaskButtonDone: {
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
  },
  darkTaskMarkerColor: {
    borderColor: '#9347CA'
  },
  lightTaskMarkerColor: {
    borderColor: '#3D3D4D'
  },
  darkTaskMarkerDoneColor: {
    backgroundColor: '#9347CA'
  },
  lightTaskMarkerDoneColor: {
    backgroundColor: '#273FAD',
    borderColor: '#3D3D4D'
  },
})