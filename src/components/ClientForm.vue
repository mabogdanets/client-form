<template>
  <div class="client-form">
    <h2>Создать клиента</h2>
    
    <form @submit.prevent="submitForm" class="form">
    <div class="client-div">
        <div class="form-group">
          <label for="surname">Фамилия *</label>
          <input type="text" id="surname" v-model="surname" @input="setSurname" @blur="$v.surname.$touch()">
        </div>
        <div v-if="$v.surname.$error" class="error_small">*обязательное поле</div>
        <div class="form-group">
          <label for="name">Имя *</label>
          <input type="text" id="name" v-model="name" @input="setName" @blur="$v.name.$touch()">
        </div>
        <div v-if="$v.name.$error" class="error_small">*обязательное поле</div>
        <div class="form-group">
          <label for="name">Отчество</label>
          <input type="text" id="patronymic" v-model="patronymic">
        </div>
        <div class="form-group">
          <label for="dateOfBirth">Дата рождения *</label>
          <input type="date" id="dateOfBirth" v-model="dateOfBirth" @input="setDateOfBirth" @blur="$v.dateOfBirth.$touch()">
        </div>
        <div v-if="$v.dateOfBirth.$error" class="error_small">*обязательное поле</div>
        <div class="form-group">
          <label for="phoneNumber">Номер телефона *</label>
          <input type="tel" id="phoneNumber" v-model="phoneNumber" @input="setPhone" @blur="$v.phoneNumber.$touch()">
        </div>
        <div v-if="$v.phoneNumber.$error && !$v.phoneNumber.required" class="error_small">*обязательное поле</div>
        <div v-if="$v.phoneNumber.$error && !$v.phoneNumber.minLength" class="error_small">*11 цифр, начиная с '7'</div>
        <div class="form-group">
          <label for="sex">Пол</label>
          <select type="text" id="sex" v-model="sex">
            <option disabled value="">Выберите пол:</option>
            <option value="woman">Женщина</option>
            <option value="man">Мужчина</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="clientGroup">Группа клиентов * <span class="additional">(зажмите ctrl)</span></label>
          <select id="clientGroup" v-model="clientGroup" @change="setClientGroup" @blur="$v.clientGroup.$touch()" multiple>
            <option value="vip">VIP</option>
            <option value="problematic">Проблемные</option>
            <option value="oms">ОМС</option>
          </select>
        </div>
        
        <div v-if="$v.clientGroup.$error" class="error_small">*обязательное поле</div>
        <div class="form-group">
          <label for="doctor">Лечащий врач</label>
          <select id="doctor" v-model="doctor">
            <option disabled value="">Выберите врача</option>
            <option value="ivanov">Иванов</option>
            <option value="zakharov">Захаров</option>
            <option value="chernysheva">Чернышева</option>
          </select>
        </div>
        <div class="form-group">
          <input type="checkbox" id="sms" v-model="sms">
          <label for="sms">Не отправлять SMS</label>
        </div>
      
      <div class="multiple">
        <span class="title">Адрес</span>
        <div class="form-group">
          <label for="index">Индекс</label>
          <input type="number" id="index" v-model="address.index">
        </div> 
        <div class="form-group">
          <label for="country">Страна</label>
          <input type="text" id="country" v-model="address.country">
        </div>
        <div class="form-group">
          <label for="region">Область</label>
          <input type="text" id="region" v-model="address.region">
        </div>
        <div class="form-group">
          <label for="city">Город *</label>
          <input type="text" id="city" v-model="address.city" @input="setCity" @blur="$v.address.city.$touch()">
        </div>
        <div v-if="$v.address.city.$error" class="error_small">*обязательное поле</div>
        <div class="form-group">
          <label for="street">Улица</label>
          <input type="text" id="street" v-model="address.street">
        </div>
        <div class="form-group">
          <label for="house">Дом</label>
          <input type="number" id="house" v-model="address.house">
        </div>
      </div>
      
      <div class="multiple">
        <span class="title">Документ</span>
        <div class="form-group">
          <label for="documentType">Тип документа *</label>
          <select id="documentType" v-model="document.documentType" @change="setDocumentType" @blur="$v.document.documentType.$touch()">
            <option disabled value="">Выберите тип документа:</option>
            <option value="passport">Паспорт</option>
            <option value="birthCertificate">Свидетельство о рождении</option>
            <option value="driverLicense">Вод. удостоверение</option>
          </select>
        </div>
        <div v-if="$v.document.documentType.$error" class="error_small">*обязательное поле</div>
        <div class="form-group">
          <label for="series">Серия</label>
          <input type="number" id="series" v-model="document.series">
        </div>
        <div class="form-group">
          <label for="number">Номер</label>
          <input type="number" id="number" v-model="document.number">
        </div>
        <div class="form-group">
          <label for="issuedBy">Кем выдан</label>
          <input type="text" id="issuedBy" v-model="document.issuedBy">
        </div>
        <div class="form-group">
          <label for="dateOfIssue">Дата выдачи *</label>
          <input type="date" id="dateOfIssue" v-model="document.dateOfIssue" @input = "setDateOfIssue" @blur="$v.document.dateOfIssue.$touch()">
        </div>
        <div v-if="$v.document.dateOfIssue.$error" class="error_small">*обязательное поле</div>
      </div>
      <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <button type="submit">Создать клиента</button>
    </div>
    </form>

    

  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      surname: '',
      name: '',
      patronymic: '',
      dateOfBirth: '',
      phoneNumber: '',
      sex: '',
      clientGroup: [],
      doctor: '',
      sms: false,
      address: {
        index: '',
        country: '',
        region: '',
        city: '',
        street: '',
        house: '',
      },
      document: {
        documentType: '',
        series: '',
        number: '',
        issuedBy: '',
        dateOfIssue: ''
      },
      successMessage: '',
      errorMessage: '',

    };
  },
  validations: {
    surname: { required },
    name: { required },
    dateOfBirth: { required },
    phoneNumber: {
      required,
      minLength: value => value.length === 11 && value.startsWith('7')
    },
    clientGroup: { required },
    address: {
      city: {
        required
      }
    },
    document: {
      documentType: {
        required
      },
      dateOfIssue: {
        required
      }
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
      this.$v.name.$touch(); 
    },
    setSurname(event) {
      this.surname = event.target.value;
      this.$v.surname.$touch(); 
    },
    setDateOfBirth(event) {
      this.dateOfBirth = event.target.value;
      this.$v.dateOfBirth.$touch(); 
    },
    
    setClientGroup(event) {
      this.clientGroup = Array.from(event.target.selectedOptions, option => option.value);
      this.$v.clientGroup.$touch(); 
    },

    setCity(event) {
      this.address.city = event.target.value;
      this.$v.address.city.$touch(); 
    },
    setDateOfIssue(event){
      this.document.dateOfIssue = event.target.value;
      this.$v.document.dateOfIssue.$touch();
    },
    setDocumentType(event){
      this.document.documentType = event.target.value;
      this.$v.document.documentType.$touch();
    },
    setPhone(event) {
      this.phoneNumber = event.target.value;
      this.$v.phoneNumber.$touch(); 
    },
    submitForm() {
      if (this.$v.$invalid) {
        this.errorMessage = 'Пожалуйста, заполните все обязательные поля.';
        return;
      }
      this.resetForm();
      this.successMessage = 'Новый клиент создан успешно!';
    },
    resetForm() {
      this.surname = '';
      this.name = '';
      this.patronymic = '';
      this.dateOfBirth = '';
      this.phoneNumber = '';
      this.sex = '';
      this.clientGroup = [];
      this.doctor = '';
      this.sms = false;
      this.address.index = '';
      this.address.country = '';
      this.address.region = '';
      this.address.city = '';
      this.address.street = '';
      this.address.house = '';
      this.document.documentType = '';
      this.document.series = '';
      this.document.number = '';
      this.document.issuedBy = '';
      this.document.dateOfIssue = '';
      this.$v.$reset();
    },
  }
};
</script>
<style>
.client-form {
  max-width: 320px;
  min-width: 320px;
  margin: 0 auto;
}
.client-div{
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.form-group {
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 3px;
}

.multiple{
  display: flex;
  flex-direction: column;
  border: solid 1px rgb(236, 232, 232);
  border-radius: 10px;
  margin-bottom: 10px;
}

input,
select {
  padding: 5px;
  margin-left: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  
}
select{
  width: 151px;
}

button {
  padding: 10px 20px;
  margin: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.success-message {
  color: green;
  margin-top: 10px;
}

.error-message {
  color: red;
  margin-top: 10px;
}
.error_small{
  color: red;
  font-size: 12px;
  text-align: right;
  margin-right: 10px;
}
#clientGroup{
  height: 65px;
}
label {
  display: inline-block;
  width: 150px;
  text-align: right;
}
.additional{
  font-size: 12px;
}

</style>