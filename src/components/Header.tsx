import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Theme {
  changeTheme: () => void,
  isDark: boolean
}

export function Header({ changeTheme, isDark }: Theme) {
  return (
    <View style={[styles.header, isDark ? styles.darkHeaderColor : styles.lightHeaderColor]}>
      <Text style={[
        styles.headerText,
        isDark ? styles.darkHeaderTextColor : styles.lightHeaderTextColor
      ]}>to.</Text>
      <Text style={[styles.headerText,
      isDark ? styles.darkHeaderTextColor : styles.lightHeaderTextColor,
      { fontFamily: 'Poppins-SemiBold' }
      ]}>do</Text>
      <View
        style={[
          styles.wrappedButtonTheme,
          isDark ? styles.darkWrappedButtonTheme : styles.lightWrappedButtonTheme
        ]}
      >
        <TouchableOpacity
          onPress={changeTheme}
        >

          <View
            style={[
              styles.buttonTheme,
              isDark ? styles.darkButtonTheme : styles.ligthButtonTheme
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  wrappedButtonTheme: {
    position: 'absolute',
    height: 16,
    width: 28,
    borderRadius: 8,
    right: 40,
    top: 40
  },

  buttonTheme: {
    height: 16,
    width: 16,
    borderRadius: 8,
  },
  darkHeaderColor: {
    backgroundColor: '#282B5A'
  },
  lightHeaderColor: {
    backgroundColor: '#273FAD'
  },
  darkHeaderTextColor: {
    color: '#E1E1E6'
  },
  lightHeaderTextColor: {
    color: '#FFF'
  },
  darkWrappedButtonTheme: {
    backgroundColor: '#3D3D4D'
  },
  lightWrappedButtonTheme: {
    backgroundColor: '#FFF'
  },
  darkButtonTheme: {
    backgroundColor: '#E1E1E6',
    marginLeft: 12
  },
  ligthButtonTheme: {
    backgroundColor: '#3D3D4D'
  }
});
