<template>
  <StackLayout class="select-date" @tap="openDatePickerDialog">
    <Label class="label" text="Hoje" />
    <Label class="date">
      <FormattedString>
        <Span :text="currentSelectedDate.getDate()" />
        <Span text="/" />
        <Span :text="currentSelectedDate.getMonth() + 1" />
      </FormattedString>
    </Label>
  </StackLayout>
</template>

<script>
import DateTimePickerDialog from '~/shared/dateTimePickerDialog';

export default {
  data() {
    return {
      currentSelectedDate: new Date(),
    };
  },
  methods: {
    openDatePickerDialog() {
      DateTimePickerDialog.pickDate({
        title: 'Select Your Birthday',
        maxDate: new Date(),
        startingDate: this.currentSelectedDate,
        datePickerMode: 'calendar',
      })
        .then(result => {
          this.currentSelectedDate = new Date(
            result.year,
            result.month - 1,
            result.day
          );
          this.$emit('tap', { selectedDate: this.currentSelectedDate });
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/common';

.select-date {
  @extend .keyboard-button-item;
  text-align: center;
  horizontal-align: center;
  vertical-align: center;
  padding-top: 6;

  .label {
    font-size: 18;
  }
  .date {
    font-weight: 200;
    font-size: 12;
  }
}
</style>
