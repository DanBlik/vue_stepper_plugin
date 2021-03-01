// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
  data() {
    return {
      activeIndex: 0, // то, что позволяет определить текущий активный шаг,
      tryAgain: false,
      steps: [
        {title: 'Start', text: 'Вступительная часть...'},
        {title: 'Contacts detail', text: 'Укажите свои контакты. Тут можно добавить кучу форм на будущее.'},
        {title: 'Shipping info', text: 'Информация по доставке и самовывозу. Тут тоже можно добавить кучу всего.'},
        {title: 'Billing address', text: 'Укажите свой адрес... И опять формы'},
        {title: 'Payment', text: 'Оплата заказа и отзыв.'},
      ]
    }
  },
  methods: {
    prev() {
      // когда нажимаем кнопку назад
      if (this.isBtnBackOff) {
        return undefined;
      }
      this.activeIndex --
    },
    reset() {
      // начать заново
        this.activeIndex = 0
        this.tryAgain = false
        return
    },
    nextOrFinish() {
      // кнопка вперед или закончить
      if (this.isFinishStep) {
        this.tryAgain = true
        return undefined
      }
      this.activeIndex++
    },
    setActive(idx) {
      // когда нажимаем на определенный шаг
      this.activeIndex = idx
    }
  },
  computed: {
    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    currentStep() {
      return this.steps[this.activeIndex]
    },
    // 2. выключена ли кнопка назад
    isBtnBackOff() {
      if (this.activeIndex === 0) {
        return true;
      }
      return false;
    },
    // 3. находимся ли мы на последнем шаге
    isFinishStep() {
      if (this.activeIndex === this.steps.length-1) {
        return true
      }
      return false
    }
  }
}

Vue.createApp(App).mount('#app')