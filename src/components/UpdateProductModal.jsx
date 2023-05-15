import { Modal } from 'antd'
import React from 'react'

const UpdateProductModal = ({updateModal, setUpdateModal, data}) => {
    console.log("update product data => ", data)
  return (
    <div>
      <Modal
      footer={null}
      open={updateModal}
      onOk={() => setUpdateModal(false)}
      onCancel={() => setUpdateModal(false)}
      destroyOnClose
      >
        update product modal
      </Modal>
    </div>
  )
}

export default UpdateProductModal
