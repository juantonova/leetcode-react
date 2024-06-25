import { ArgsProps } from "antd/es/message";

export const API_URL = 'https://leetcode-nest-1.onrender.com';

export const successMessage = {
        type: 'success',
        content: 'Данные успешно изменены',
} as ArgsProps

export const errorMessage = {
        type: 'error',
        content: 'Что-то пошло не так. Попробуйте еще раз.',
} as ArgsProps