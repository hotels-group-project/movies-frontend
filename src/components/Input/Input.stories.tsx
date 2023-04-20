import Input from "./Input";

import styles from './Input.module.scss';
import '../../styles/constants.scss';

export default {
    title: 'UI/Input',
    component: Input,
}


export const defaultInput = () => <Input placeholder="Расскажите о персоне"/>