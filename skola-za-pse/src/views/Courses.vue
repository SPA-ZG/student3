<template>
  <div class="home-div">

    <!-- computed properties -->
    <h3 class="summary">{{ coursesSummary }}</h3>

    <div class="courses-container">
      <div v-for="course in courses" :key="course.id" class="course">
        <h3>{{ course.name }}</h3>
        <p>{{ course.description }}</p>
        <div class="course-info">
          <span>{{ course.hours }} h</span> | <span>{{ course.price }}</span>
        </div>
      </div>
    </div>

    <label class="checkbox">
      <!-- two-way binding -->
      <input type="checkbox" v-model="showAdditionalCourses" />
      Prikaži radionice
    </label>

    <h3 class="additional-courses-summary summary" v-if="showAdditionalCourses">{{ additionalCoursesSummary }}</h3>

    <div v-if="showAdditionalCourses" class="additional-courses-container">
      <div class="courses-container">
      <div
        v-for="additionalCourse in additionalCourses"
        :key="additionalCourse.id"
        class="course"
      >
        <h3>{{ additionalCourse.name }}</h3>
        <p>{{ additionalCourse.description }}</p>
        <div class="course-info">
          <span>{{ additionalCourse.hours }} h</span> |
          <span>{{ additionalCourse.price }}</span>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  // komponenta sa stanjem 
  data() {
    return {
      showAdditionalCourses: false,
      additionalCoursesSummary: "",
      courses: [
        {
          id: 1,
          name: "Osnovni tečaj",
          description:
            "Osnovni tečaj namijenjen je psima početnicima, gdje će naučiti kako šetati uz nogu, odazvati se na poziv te osnovne naredbe poput sjedni i lezi.",
          hours: 15,
          price: "100 €",
        },
        {
          id: 2,
          name: "Tečaj agilnosti",
          description:
            "Dinamičan tečaj agilnosti pruža psima i njihovim vlasnicima zabavu kroz vježbe koje poboljšavaju agilnost, brzinu i suradnju.",
          hours: 20,
          price: "150 €",
        },
        {
          id: 3,
          name: "Školica trikova",
          description:
            "U školici trikova, psi će naučiti razne zanimljive trikove poput davanja šape, okretanja, preskakanja prepreka i još mnogo toga.",
          hours: 10,
          price: "50 €",
        },
        {
          id: 4,
          name: "Napredni tečaj",
          description:
            "Napredni tečaj namijenjen je iskusnim vlasnicima pasa koji žele proširiti vještine svog psa kroz složenije naredbe, rad na slobodi i razumijevanje specifičnih potreba njihovog ljubimca.",
          hours: 30,
          price: "200 €",
        },
      ],
      additionalCourses: [
        {
          id: 5,
          name: "DOĐI",
          description: 'Radionica namijenjena početnicima ili onima koji s naredbom "Dođi!"',
          hours: 2,
          price: "5 €",
        },
        {
          id: 6,
          name: "ZABAVI SE",
          description: "Dva sata nezaboravne zabave za Vas i Vašeg psa gdje možete naučiti nove načine igranja.",
          hours: 2,
          price: "5 €",
        },
        {
          id: 7,
          name: "NE BOJ SE",
          description: "Radionica namijenjena prestrašenim psima.",
          hours: 2,
          price: "5 €",
        },
      ],
    };
  },
  // computed properties
  computed: {
    coursesSummary() {
      const totalCourses = this.courses.length 
      return `Trenutno imamo ${totalCourses} tečaja na raspolaganju.`;
    },
  },
  //methods
  methods: {
    updateAdditionalCoursesSummary() {
      const summaryText = `Trenutno imamo ${this.additionalCourses.length} radionice na raspolaganju.`;
      const summaryElement = document.querySelector('.additional-courses-summary');

      if (summaryElement) {
        summaryElement.textContent = summaryText;
      }
    },
  },
  // koristiti barem jedan lifecycle hook
  updated() {
    console.log('updated')
    this.updateAdditionalCoursesSummary();
  }
};
</script>

<!-- barem jedan scoped style -->
<style scoped>
.home-div {
  color: #6b492e;
  background-color: #efefef;
  width: 100vw;
  height: 95vh;
  overflow-y: scroll;
  padding-bottom: 50px;
}
.home-div p {
  color: #bc7533;
}

.home-div h3 {
  font-weight: bold;
  margin-bottom: 10px;
}

.courses-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.course {
  width: 300px;
  height: 300px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #6b492e;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.course-info {
  font-size: 20px;
  margin-top: auto;
  font-weight: 600;
}

.course:hover {
  background-color: #e2e2e2;
}

.course-info span {
  margin: 0 5px;
}

label {
  margin-left: 10px;
  color: #6b492e;
  font-size: 15px;
}

.summary {
  margin-top: 10px;
  margin-left: 10px;
}

@media (max-width: 600px) {
  .course {
    width: calc(50% - 20px);
  }
}
</style>
