import React from 'react';
import styles from './Registration.module.css';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Registration = () => {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
      };
    return (
        <div className={styles.container}>
            <h3>Исполняемая операция: </h3>
            <section className={styles.section__date}>
                <div className={styles.date}>
                    <label>Начало операции</label>
                    <input type='date' />
                    <label className={styles.label}>Окончание операции</label>
                    <input type='date' />
                </div>
                <div className={styles.section__time}>
                    <label>Длительность, мин: </label>
                    <label>норматив/отклонение: </label>
                    <textarea className={styles.textarea__comment} placeholder='Введите текст комментария' />
                </div>
            </section>

            <section className={styles.section__operation}>
                <div className={styles.cont__operation}>
                    <label>Вид операции</label>
                    <div className={styles.cont__dropdown}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Выберите из списка</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                </div>

                <div className={styles.cont__operation}>
                    <label>Операция</label>
                    <div className={styles.cont__dropdown}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Выберите из списка</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                    </FormControl>
                    </div>
                </div>

                <div className={styles.cont__operation}>
                    <label>Причина</label>
                    <div className={styles.cont__dropdown}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Выберите из списка</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </section>

            <section className={styles.section_wagon}>
                <div className={styles.cont_wagon}>
                    <div className={styles.cont__operation}>
                        <label className={styles.label_text}>Станция отправления</label>
                        <div className={styles.cont__dropdown_S}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Выберите</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className={styles.cont__operation}>
                        <label>Парк отправления</label>
                        <div className={styles.cont__dropdown_S}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Выберите</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className={styles.cont__operation}>
                        <label>Путь отправления</label>
                        <div className={styles.cont__dropdown_S}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Выберите</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className={styles.cont__operation}>
                        <label>Вагоны</label>
                        <div className={styles.cont__dropdown_S}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Выберите</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>


                <div className={styles.cont_wagon}>
                    <div className={styles.cont__operation}>
                        <label>Станция назначения</label>
                        <div className={styles.cont__dropdown_S}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Выберите</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className={styles.cont__operation}>
                        <label>Парк назначения</label>
                        <div className={styles.cont__dropdown_S}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Выберите</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className={styles.cont__operation}>
                        <label>Путь назначения</label>
                        <div className={styles.cont__dropdown_S}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Выберите</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className={styles.cont__operation}>
                        <label>Направление подачи</label>
                        <div className={styles.cont__dropdown_S}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Выберите</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section_wagon}>
                <div className={styles.cont_wagon}>
                    <div className={styles.cont__operation}>
                        <label>Локомотив №1</label>
                        <div className={styles.cont__dropdown_S}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Выберите</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className={styles.cont__operation}>
                        <label>Локомотив №2</label>
                        <div className={styles.cont__dropdown_S}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Выберите</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className={styles.cont__operation}>
                        <label>Локомотив №3</label>
                        <div className={styles.cont__dropdown_S}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Выберите</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className={styles.cont__operation}>
                        <label>Локомотив №4</label>
                        <div className={styles.cont__dropdown_S}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Выберите</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>


                <div className={styles.cont_wagon}>
                    <div className={styles.cont__operation}>
                        <label>ФИО машиниста</label>
                        <div className={styles.cont__dropdown_S}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Выберите</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className={styles.cont__operation}>
                        <label>ФИО машиниста</label>
                        <div className={styles.cont__dropdown_S}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Выберите</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className={styles.cont__operation}>
                        <label>ФИО машиниста</label>
                        <div className={styles.cont__dropdown_S}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Выберите</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className={styles.cont__operation}>
                        <label>ФИО машиниста</label>
                        <div className={styles.cont__dropdown_S}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Выберите</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
            </section>
            <button className={styles.btn_save}>Сохранить операцию</button>
        </div>
    );
};

export default Registration;
