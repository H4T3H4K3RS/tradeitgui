<script setup>
import { urlValidator } from '@core/utils/validators'
import { useItemStore } from "@/stores/useRest"

const router = useRouter ()
const route = useRoute ()
const tab = ref ('base-info')
const itemStore = useItemStore ()

const snackbar = ref ({
  enabled: false,
  type: 'success',
  message: 'Hello!',
})

const tags = [ 'New' ]

const form = ref ({
  name: "",
  description: "",
  state: "draft",
  category: "clothes",
  photos: [ "https://thumbs.dreamstime.com/b/grayscale-random-squares-checkered-pattern-mosaic-abstract-geometric-design-element-cubic-cubism-illustration-214781178.jpg" ],
})

watchEffect (
  () => {
    snackbar.value = {
      enabled: true,
      message: "Загружаем предмет 🧠",
      type: 'warning',
    }
    itemStore.fetchItem (
      {
        id: route.params.id,
      },
    ).then (
      response => {
        form.value = response.data
        snackbar.value = {
          enabled: true,
          message: "Предмет загружен 🎉",
          type: 'success',
        }
      },
    ).catch (
      error => {
        snackbar.value = {
          enabled: true,
          message: error,
          type: 'error',
        }
        console.log (error)
      },
    )
  },
)

const categoryList = [
  {
    name: 'Одежда',
    value: "clothes",
  },
  {
    name: 'Аксессуары',
    value: "accessory",
  },
]

const stateList = [
  {
    name: 'Выставить',
    value: "exposed",
  },
  {
    name: 'Черновик',
    value: "draft",
  },
]

const prepareUrl = title => {
  let t = title.replace ("https://", "").replace ("http://", "")

  return t.slice (0, t.indexOf ('/'))
}

const saveItem = async () => {
  snackbar.value = {
    enabled: true,
    message: "Saving item 🧠",
    type: 'warning',
  }
  itemStore.putItem (
    {
      id: route.params.id,
      ...form.value,
    },
  ).then (
    response => {
      console.log (response)
      snackbar.value = {
        enabled: true,
        message: "Предмет сохранён 🎉",
        type: 'success',
      }
      setTimeout (
        () => {
          router.push ({
            'name': 'items',
          })
        },
        1000,
      )
    },
  ).catch (
    error => {
      snackbar.value = {
        enabled: true,
        message: `Error occured: ${error}`,
        type: 'error',
      }
      console.log (error)
    },
  )
}
</script>

<template>
  <div>
    <VSnackbar
      v-model="snackbar.enabled"
      location="bottom end"
      variant="flat"
      :color="snackbar.type"
    >
      {{ snackbar.message }}
    </VSnackbar>
    <VTabs v-model="tab">
      <VTab value="base-info">
        Основная Информация
      </VTab>
      <VTab value="photos">
        Фото
      </VTab>
    </VTabs>
    <VDivider />

    <VCard flat>
      <VCardText>
        <VWindow
          v-model="tab"
          :touch="{left: null, right: null}"
        >
          <VWindowItem value="base-info">
            <VForm class="mt-2">
              <VRow>
                <VCol
                  md="6"
                  cols="12"
                >
                  <VTextField
                    v-model="form.name"
                    label="Название"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VSelect
                    v-model="form.category"
                    :items="categoryList"
                    item-value="value"
                    item-title="name"
                    label="Категория"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VSelect
                    v-model="form.state"
                    :items="stateList"
                    item-value="value"
                    item-title="name"
                    label="Статус"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VCombobox
                    v-model="form.tags"
                    :items="tags"
                    label="Теги"
                    multiple
                  >
                    <template #selection="{ item }">
                      <VChip class="mt-1">
                        <VAvatar
                          start
                          color="primary"
                        >
                          {{ String (item.title).charAt (0).toUpperCase () }}
                        </VAvatar>
                        {{ item.title }}
                      </VChip>
                    </template>
                  </VCombobox>
                </VCol>
                <VCol
                  cols="12"
                >
                  <VTextarea
                    v-model="form.description"
                    label="Описание"
                    rows="3"
                    auto-grow
                  />
                </VCol>
              </VRow>
            </VForm>
          </VWindowItem>
          <VWindowItem value="photos">
            <VCol
              v-for="(photo, i) in form.photos"
              :key="i"
              md="6"
              cols="12"
            >
              <VTextField
                v-model="form.photos[i]"
                :label="`Фото ${i + 1}`"
                type="text"
                append-inner-icon="tabler-trash"
                :rules="[urlValidator]"
                @click:append-inner="form.photos.splice(i, 1)"
              />
            </VCol>
            <VBtn
              class="justify-end"
              variant="outlined"
              prepend-icon="tabler-plus"
              @click="form.photos.push('')"
            >
              Добавить Фото
            </VBtn>
          </VWindowItem>
        </VWindow>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex gap-4">
        <VBtn
          variant="tonal"
          :to="{name: 'items-view-id', params: {id: route.params.id}}"
          append-icon="tabler-eye"
          class="cursor-pointer"
        >
          Просмотр
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          :to="{name: 'items'}"
        >
          Отмена
        </VBtn>
        <VBtn
          @click="saveItem"
        >
          Сохранить
        </VBtn>
      </VCardText>
    </VCard>
  </div>
</template>
