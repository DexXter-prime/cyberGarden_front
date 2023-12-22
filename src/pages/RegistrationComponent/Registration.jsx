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
                    <textarea className={styles.textarea__comment} placeholder='Введите текст комментария' cols={120} rows={7} />
                </div>
            </section>

            <section className={styles.section__operation}>
                <div className={styles.cont__operation}>
                    <label>Вид операции</label>
                    <FormControl sx={{minWidth: 286}}>
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

                <div className={styles.cont__operation}>
                    <label>Операция</label>
                    <FormControl sx={{minWidth: 286}}>
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

                <div className={styles.cont__operation}>
                    <label>Причина</label>
                    <FormControl sx={{minWidth: 286}}>
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
            </section>

            <section className={styles.section_wagon}>
                <div className={styles.cont_wagon}>
                    <div className={styles.cont__operation}>
                        <label>Станция отправления</label>
                        <FormControl sx={{minWidth: 200}}>
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

                    <div className={styles.cont__operation}>
                        <label>Парк отправления</label>
                        <FormControl sx={{minWidth: 200}}>
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

                    <div className={styles.cont__operation}>
                        <label>Путь отправления</label>
                        <FormControl sx={{minWidth: 200}}>
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

                    <div className={styles.cont__operation}>
                        <label>Вагоны</label>
                        <FormControl sx={{minWidth: 200}}>
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


                <div className={styles.cont_wagon}>
                    <div className={styles.cont__operation}>
                        <label>Станция назначения</label>
                        <FormControl sx={{minWidth: 200}}>
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

                    <div className={styles.cont__operation}>
                        <label>Парк назначения</label>
                        <FormControl sx={{minWidth: 200}}>
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

                    <div className={styles.cont__operation}>
                        <label>Путь назначения</label>
                        <FormControl sx={{minWidth: 200}}>
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

                    <div className={styles.cont__operation}>
                        <label>Направление подачи</label>
                        <FormControl sx={{minWidth: 200}}>
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
            </section>

            <section className={styles.section_wagon}>
                <div className={styles.cont_wagon}>
                    <div className={styles.cont__operation}>
                        <label>Локомотив №1</label>
                        <FormControl sx={{minWidth: 200}}>
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

                    <div className={styles.cont__operation}>
                        <label>Локомотив №2</label>
                        <FormControl sx={{minWidth: 200}}>
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

                    <div className={styles.cont__operation}>
                        <label>Локомотив №3</label>
                        <FormControl sx={{minWidth: 200}}>
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

                    <div className={styles.cont__operation}>
                        <label>Локомотив №4</label>
                        <FormControl sx={{minWidth: 200}}>
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


                <div className={styles.cont_wagon}>
                    <div className={styles.cont__operation}>
                        <label>ФИО машиниста</label>
                        <FormControl sx={{minWidth: 200}}>
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

                    <div className={styles.cont__operation}>
                        <label>ФИО машиниста</label>
                        <FormControl sx={{minWidth: 200}}>
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

                    <div className={styles.cont__operation}>
                        <label>ФИО машиниста</label>
                        <FormControl sx={{minWidth: 200}}>
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

                    <div className={styles.cont__operation}>
                        <label>ФИО машиниста</label>
                        <FormControl sx={{minWidth: 200}}>
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
            </section>
        </div>
    );
};

export default Registration;
