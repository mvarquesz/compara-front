import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface FormFieldsProps {
  style?: object;
}

const FormFields: React.FC<FormFieldsProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      {/* CEP Field */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>CEP</Text>
        <TextInput
          placeholder="Insira"
          placeholderTextColor="#B8B8B8"
          style={styles.input}
        />
      </View>

      {/* Endereço Field */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Endereço</Text>
        <TextInput
          placeholder="Insira"
          placeholderTextColor="#B8B8B8"
          style={styles.input}
        />
      </View>

      {/* Bairro Field */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Bairro</Text>
        <TextInput
          placeholder="Insira"
          placeholderTextColor="#B8B8B8"
          style={styles.input}
        />
      </View>

      {/* Estado/Província and Cidade Row */}
      <View style={styles.rowContainer}>
        <View style={styles.halfFieldContainer}>
          <Text style={styles.label}>Estado/Província</Text>
          <TextInput
            placeholder="Insira"
            placeholderTextColor="#B8B8B8"
            style={styles.halfInput}
          />
        </View>
        <View style={styles.halfFieldContainer}>
          <Text style={styles.label}>Cidade</Text>
          <TextInput
            placeholder="Insira"
            placeholderTextColor="#B8B8B8"
            style={styles.halfInput}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minWidth: 330,
    gap: 10,
  },
  fieldContainer: {
    gap: 3,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 50,
  },
  halfFieldContainer: {
    flex: 1,
    gap: 3,
  },
  label: {
    fontFamily: 'Open Sans',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    color: '#121212',
  },
  input: {
    height: 48,
    width: '100%',
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#467A59',
    paddingHorizontal: 16,
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 24,
  },
  halfInput: {
    height: 48,
    width: '100%',
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#467A59',
    paddingHorizontal: 16,
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default FormFields;

