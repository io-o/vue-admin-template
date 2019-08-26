<template>
  <div class="app-container">
    <dynamic-form :form-config="formConfig" :value="value" />
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column 
        v-for="item in groupConfig.formList"
        :key="item.key"
        :prop="item.key" 
        :label="item.label"
        >
        <template slot-scope="scope">
          <el-input v-if ="item.isEdit" v-model="scope.row[item.key]">
          </el-input>
          <span v-else>{{scope.row[item.key]}}</span>
        </template>
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleEdit(scope)">编辑</el-button>
          </template>
        </el-table-column>
    </el-table>
    <el-button @click="handleClick">dd</el-button>
  </div>
</template>

<script type="text/javascript">
import baseJson from "@/assets/json/base.json";
export default {
  data() {
    return {
      value: {},
      formConfig: {
        formItemList: baseJson.input
      },
      tableData: [
        {
          name: '张三',
          res: 180
        },
        {
          name: '李四',
          res: 170
        },
        {
          name: '王五',
          res: 180
        }
      ],
      groupConfig: {
        isMore: true,
        formList: [
          {
            type: "input",
            isEdit: false,
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
            key: "name"
          },
          {
            label: '结果',
            isEdit: true,
            key: 'res'
          }
        ]
      }
    };
  },

  methods: {
    handleClick() {
      console.log(this.tableData);
    },

    handleEdit(row) {
      console.log(row);
      
    }
  }
};
</script>
