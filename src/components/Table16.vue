<template>
  <div>
    <b-table
      :items='items'
      :fields='fields'
      responsive='sm'
    >
      <template slot='thead-top' >
        <tr>
          <th colspan='2'>&nbsp;</th>
          <th>Type 1</th>
          <th colspan='3'>Type 2</th>
          <th>Type 3</th>
        </tr>
      </template>
    </b-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { name: 'Stephen Hawking', id: 1, type1: false, type2a: true, type2b: false, type2c: false, type3: false },
          { name: 'Johnny Appleseed', id: 2, type1: false, type2a: true, type2b: true, type2c: false, type3: false },
          { name: 'George Washington', id: 3, type1: false, type2a: false, type2b: false, type2c: false, type3: true },
          { name: 'Albert Einstein', id: 4, type1: true, type2a: false, type2b: false, type2c: true, type3: false },
          { name: 'Isaac Newton', id: 5, type1: true, type2a: true, type2b: false, type2c: true, type3: false }
        ],
        fields: [
          'name',
          { key: 'id', label: 'ID' },
          { key: 'type1', label: 'Type 1' },
          { key: 'type2a', label: 'Type 2A' },
          { key: 'type2b', label: 'Type 2B' },
          { key: 'type2c', label: 'Type 2C' },
          { key: 'type3', label: 'Type 3' }
        ]
      }
    }
  }
</script>