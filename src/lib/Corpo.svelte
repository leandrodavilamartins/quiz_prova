<script>
  import { db } from "../main.js";
  import { onMount } from "svelte";
  import { collection, getDocs } from "firebase/firestore";

  let index = 22;
  let questions = [];
  $: optionA = questions[index]?.optionA;
  $: optionB = questions[index]?.optionB;
  $: optionC = questions[index]?.optionC;
  $: optionD = questions[index]?.optionD;
  $: optionE = questions[index]?.optionE;

  function printEl() {
    const el = document.querySelector("#enunc");
    console.log(el);
    el.innerHTML = questions[index]?.enunc;
  }

  onMount(async () => {
    const res = await getDocs(collection(db, "questoes"));
    console.log(res);
    res.forEach((doc) => {
      //console.log(doc.id); //gets the document id
      let data = doc.data();
      questions = [...questions, data.obj];
    });
    console.log(questions[index]?.enunc);
    printEl();
  });

  function msg() {
    console.log(db);
  }
</script>

<main>
  <div>
    <p id="enunc">{questions[index]?.enunc}</p>
  </div>
  <div class="flex-container">
    {#if optionA != (undefined || "")}
      <div class="form-check">
        <div class="flex-item">
          <div>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
          </div>
          <div>
            <label class="form-check-label" for="flexRadioDefault1"
              >&nbsp;a)&nbsp;
              {questions[index]?.optionA}
            </label>
          </div>
        </div>
        <br />
      </div>
    {/if}
    {#if optionB != (undefined || "")}
      <div class="form-check">
        <div class="flex-item">
          <div>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
          </div>
          <div>
            <label class="form-check-label" for="flexRadioDefault2"
              >&nbsp;b)&nbsp;
              {questions[index]?.optionB}
            </label>
          </div>
        </div>
        <br />
      </div>
    {/if}
    {#if optionC != (undefined || "")}
      <div class="form-check">
        <div class="flex-item">
          <div>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
          </div>
          <div>
            <label class="form-check-label" for="flexRadioDefault2"
              >&nbsp;c)&nbsp;
              {questions[index]?.optionC}
            </label>
          </div>
        </div>
        <br />
      </div>
    {/if}
    {#if optionD != (undefined || "")}
      <div class="form-check">
        <div class="flex-item">
          <div>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
          </div>
          <div>
            <label class="form-check-label" for="flexRadioDefault2"
              >&nbsp;d)&nbsp;
              {questions[index]?.optionD}
            </label>
          </div>
        </div>
        <br />
      </div>
    {/if}
    {#if optionE != (undefined || "")}
      <div class="form-check">
        <div class="flex-item">
          <div>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
          </div>
          <div>
            <label class="form-check-label" for="flexRadioDefault2"
              >&nbsp;e)&nbsp;
              {questions[index]?.optionE}
            </label>
          </div>
        </div>
        <br />
      </div>
    {/if}
  </div>

  <div class="checkboxContainer">
    <p><br /><br /></p>
    <div class="form-check">
      <div class="flex-item-2">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label class="form-check-label" for="defaultCheck1">
          &nbsp;&nbsp;Questão de revisão
        </label>
      </div>
    </div>
  </div>

  <button on:click={msg}>Próxima</button>
</main>

<style>
  .flex-container {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  .flex-item {
    display: flex;
    justify-content: left;
  }
  .form-check-label {
    display: flex;
    text-align: left;
  }
  #enunc {
    text-align: left;
  }
  .checkboxContainer {
    display: flex;
    flex-direction: row-reverse;
  }
  .flex-item-2 {
    display: flex;
    flex-direction: row;
    justify-content: right;
  }
</style>
