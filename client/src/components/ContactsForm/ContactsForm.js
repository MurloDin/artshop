import React from "react";
import {Form, Field} from 'react-final-form'
import "./ContactsForm.scss";
import axios from "axios";


const ContactsForm = () => {

    const onSubmit = values => {
        const apiUrl = 'http://localhost:8000/api/order';
        axios.post(apiUrl, JSON.stringify(values), {headers: {"content-type": "application/json"}}).then((resp) => console.log('r', resp))
    };

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{}}
            render={({handleSubmit, form, submitting, pristine, values}) => (
                <form
                    onSubmit={handleSubmit}
                    className="contacts-form"
                    autoComplete="off"
                >
                    <div className="contacts-form__input-wrapper">
                        <Field
                            name="pictureType"
                            component="select"
                            className="contacts-form__select"
                        >
                            <option value="" default disabled selected>Выберите тип картины</option>
                            <option value="Портрет" className="contacts-form__select-item">Портрет</option>
                            <option value="Поп арт" className="contacts-form__select-item">Поп арт</option>
                            <option value="Модерн" className="contacts-form__select-item">Модерн</option>
                        </Field>
                    </div>
                    <div className="contacts-form__input-wrapper">
                        <Field
                            placeholder="Сроки"
                            name="date"
                            component="input"
                            type="date"
                            className="contacts-form__input"
                        />
                    </div>
                    <div className="contacts-form__input-wrapper">
                        <Field
                            placeholder="Телефон"
                            name="phone"
                            component="input"
                            type="phone"
                            className="contacts-form__input"
                        />
                    </div>
                    <div className="contacts-form__input-wrapper">
                        <Field
                            placeholder="Ваш комментарий"
                            name="comment"
                            component="textarea"
                            type="text"
                            className="contacts-form__textarea"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={submitting || pristine}
                        className="contacts-form__btn"
                    >
                        Отправить
                    </button>
                </form>
            )}
        />
    )
}

export default ContactsForm;
