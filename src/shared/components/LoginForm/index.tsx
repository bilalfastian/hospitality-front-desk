import React from 'react';
import { Formik, Field, Form } from 'formik';
// import { useQuery, gql } from '@apollo/client';

// const LOGIN_QUERY = gql`
//     {
//         rates(currency: "USD") {
//             currency
//             rate
//         }
//     }
// `;
export default function LoginForm() {
    // const { loading, error, data } = useQuery(LOGIN_QUERY);

    // if (loading) {
    //     return <p>Loading...</p>;
    // }
    // if (error) {
    //     return <p>Error :(</p>;
    // }

    // const sessionToken = data.health;
    return (
        <div className="login-form">
            {/*<span>{sessionToken}</span>*/}
            <Formik
                initialValues={{ name: '', email: '' }}
                onSubmit={async (values) => {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    // eslint-disable-next-line no-alert
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <Field name="name" type="text" />
                    <Field name="email" type="email" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}
