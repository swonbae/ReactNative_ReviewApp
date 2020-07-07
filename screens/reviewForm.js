import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { GlobalStyles } from "../styles/Global";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/Button";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test(
      "is-num-1-5",
      "Rating must be a number 1 - 5",
      (val) => parseInt(val) < 6 && parseInt(val) > 0
    ),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={GlobalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
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
              onBlur={props.handleBlur("title")}
            />
            <Text style={GlobalStyles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>
            <TextInput
              multiline
              style={GlobalStyles.input}
              placeholder="Review body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("body")}
            />
            <Text style={GlobalStyles.errorText}>
              {props.touched.body && props.errors.body}
            </Text>
            <TextInput
              style={GlobalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur("rating")}
            />
            <Text style={GlobalStyles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>
            <FlatButton text="submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
