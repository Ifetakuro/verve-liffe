import React from 'react';
import {StyleSheet} from 'react-native';

export const generalStyles = StyleSheet.create({
  landingImg: {
    height: '100%',
    width: '100%',
    display: 'flex',
  },
  container: {
    paddingTop: 30,
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  authenticationHeading: {
    color: '#00425F',
    fontWeight: 600,
    fontSize: 18,
    marginBottom: 13,
  },
  input: {
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: '#E8E8E8',
  },

  inputContainer: {
    marginVertical: 5,
  },
});
