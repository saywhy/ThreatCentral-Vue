
import axios from "../axios"
import layout from "@api/urls/layout"

export default {
  // 菜单
  fetchMenu (data) {
    return axios.get(layout.menu)
  },
}