'use client'
import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from 'next-nprogress-bar';
import { usePathname } from 'next/navigation';

interface IStyles {
    readonly [key: string]: string;
}

interface IProps {
    styles: IStyles;
    errorMessage: string;
    isSuccessful: boolean;
}

function LoginForm({ styles }: { styles: IStyles }) {
    const { replace } = useRouter();
    const pathname = usePathname();

    const schema = Yup.object().shape({
        email: Yup.string()
            .required("Email is a required field")
            .email("Invalid email format"),
        password: Yup.string()
            .required("Password is a required field")
            .min(6, "Password must be at least 6 characters"),
    });

    const handleSubmit = (values: any) => {
        // set query params
        const params = new URLSearchParams();
        params.append('email', values.email);
        params.append('password', values.password);

        replace(`${pathname}?${params.toString()}`);
    }

    return (
            <Formik
                validationSchema={schema}
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSubmit}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <div className={styles.login}>
                        <div className={styles.form}>
                            {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                            <form noValidate onSubmit={handleSubmit}>
                                <span>Login</span>
                                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="Enter email id / username"
                                    className={styles["form-control"] + " " + styles.inp_text}
                                    id="email"
                                />
                                {/* If validation is not passed show errors */}
                                <p className={styles["error"]}>
                                    {errors.email && touched.email && errors.email}
                                </p>
                                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder="Enter password"
                                    className={styles["form-control"]}
                                />
                                {/* If validation is not passed show errors */}
                                <p className={styles["error"]}>
                                    {errors.password && touched.password && errors.password}
                                </p>
                                {/* Click on submit button to submit the form */}
                                <button type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                )}
            </Formik>
    );
}

export default LoginForm;