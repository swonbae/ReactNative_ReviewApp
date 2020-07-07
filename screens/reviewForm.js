import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { GlobalStyles } from "../styles/Global";
import { Formik } from "formik";

export default function ReviewForm({ addReview }) {
  return (
    <View style={GlobalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values, actions) => {
          addReview(values);
          //   actions.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={GlobalStyles.input}
              placeholder="Review title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
            />
            <TextInput
              multiline
              style={GlobalStyles.input}
              placeholder="Review body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
            />
            <TextInput
              style={GlobalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
            />
            <Button
              title="submit"
              color="maroon"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
