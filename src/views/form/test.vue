<template>
  <div class="app-container">
    <!-- <div
      v-for="group in data.groupConfig"
      :key="group.id"
    >-->
    <dynamic-form :form-config="data" :value="value" />
    <!-- <el-table
        v-else
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          v-for="item in group.formItemList"
          :key="item.key"
          :prop="item.key"
          :label="item.label"
        >
          <template slot-scope="scope">
            <el-input v-if="item.type === 'input'" v-model="value[item.key]" />
            <el-select v-else placeholder="请选择">
              <el-option
                v-for="option in item.defaultValue"
                :key="option.value"
                :label="option.label"
                :value="option.value"
              />
            </el-select>
          </template>
        </el-table-column>
    </el-table>-->
    <!-- </div> -->
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      data: {
        formId: "0",
        formName: "form1",
        groupConfig: [
          {
            id: 3,
            isMore: true,
            groupId: 'gri',
            data: [
              {
                name: "111",
                res: "AAA"
              },
              {
                name: "222",
                res: "BBB"
              }
            ],
            columnData: [
              {
                label: '类型',
                value: 'name'
              },
              {
                label: '结果',
                value: 'res',
                type: 'input'
              }
            ]
          },
          {
            id: 1,
            isMore: false,
            formItemList: [
              {
                type: "input",
                label: "姓名",
                disable: false,
                readonly: false,
                value: "",
                placeholder: "请输入姓名",
                rules: [
                  {
                    required: true,
                    trigger: "blur",
                    message: "请输入"
                  }
                ],
                key: "name",
                subtype: "text"
              },
              {
                type: "input",
                label: "年龄",
                disable: false,
                readonly: false,
                value: "",
                placeholder: "请输入姓名",
                rules: [
                  {
                    required: true,
                    trigger: "blur",
                    message: "请输入"
                  }
                ],
                key: "age",
                subtype: "text"
              }
            ]
          },
        ]
      },
      value: {},
      tableData: [{}]
    };
  },

  methods: {}
};
</script>

