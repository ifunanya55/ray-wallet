import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { Form, Input, Button, Select, Radio, DatePicker } from 'antd'
import AmountFormatter from 'components/Layout/AmountFormatter'
// import style from './style.module.scss'

const KickStartCreateProject = () => {
  const walletParams = useSelector((state) => state.wallets.walletParams)
  const walletData = useSelector((state) => state.wallets.walletData)
  const [form] = Form.useForm()
  const [formValues, setFormValues] = useState(form.getFieldsValue())

  const initialValues = {
    fromAddress: walletParams.accountId,
  }

  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const onValuesChange = (values) => {
    setFormValues({
      ...formValues,
      ...values,
    })
  }

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day')
  }

  useEffect(() => {
    form.resetFields()
  }, [walletParams.accountId, form])

  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues}
        requiredMark={false}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={onValuesChange}
      >
        <Form.Item
          label="Project Name"
          name="name"
          rules={[{ required: true, message: 'Please enter name' }]}
        >
          <Input size="large" placeholder="Enter Project Name" />
        </Form.Item>
        <Form.Item label="Until" name="date">
          <DatePicker
            format="YYYY-MM-DD"
            disabledDate={disabledDate}
            size="large"
            style={{ width: '100%' }}
          />
        </Form.Item>
        <Form.Item
          label="Swap Address"
          name="address"
          initialValue={`${walletParams.accountId}`}
          rules={[{ required: true, message: 'Please enter address' }]}
        >
          <Input size="large" placeholder="Address" disabled />
        </Form.Item>
        <div className="row">
          <div className="col-lg-6">
            <Form.Item
              label="Swap token"
              name="token"
              rules={[{ required: true, message: 'Please enter address' }]}
            >
              <Select size="large" placeholder="Select token">
                {walletData.assets &&
                  walletData.assets.map((asset, index) => {
                    return (
                      <Select.Option key={index} value={asset.ticker}>
                        {asset.ticker}
                      </Select.Option>
                    )
                  })}
              </Select>
            </Form.Item>
          </div>
          <div className="col-lg-6">
            <Form.Item
              label="Swap Rate"
              name="rate"
              rules={[{ required: true, message: 'Please enter rate' }]}
            >
              <Input
                size="large"
                placeholder="Enter Rate"
                autoComplete="off"
                style={{ width: '100%' }}
              />
            </Form.Item>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <Form.Item
              label="Initital Pledge"
              name="swapPledge"
              rules={[{ required: true, message: 'Please enter amount' }]}
            >
              <Input size="large" placeholder={`0.000000 ${formValues.token || ''}`} />
            </Form.Item>
          </div>
          <div className="col-lg-6">
            <Form.Item
              label="Fees Pledge"
              name="swapFees"
              rules={[{ required: true, message: 'Please enter amount' }]}
            >
              <Input size="large" placeholder="0.000000 ADA" />
            </Form.Item>
          </div>
        </div>
        <Form.Item
          label="Wallet ID"
          name="wallet"
          hidden
          initialValue={walletParams.accountId}
          rules={[{ required: true, message: 'Please enter wallet id' }]}
        >
          <Input size="large" placeholder="Address" disabled />
        </Form.Item>
        <Form.Item
          label="Project Type"
          name="type"
          rules={[{ required: true, message: 'Please enter address' }]}
        >
          <Radio.Group defaultValue="default">
            <Radio value="default">Default</Radio>
            <Radio value="premium">Premium</Radio>
          </Radio.Group>
        </Form.Item>
        <div className="ray__item mt-4">
          <div className="row">
            <div className="col-lg-6">
              <div className="ray__form__item">
                <div className="ray__form__label">Total</div>
                <div className="ray__form__amount">
                  <AmountFormatter
                    amount={formValues.type === 'premium' ? 0 : 0}
                    ticker="ada"
                    hash="lovelace"
                    large
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ray__form__item mb-3">
                <div className="ray__form__label">Service Fee</div>
                <div className="ray__form__amount">
                  <AmountFormatter
                    amount={formValues.type === 'premium' ? 0 : 0}
                    ticker="ada"
                    hash="lovelace"
                  />
                </div>
              </div>
              <div className="ray__form__item">
                <div className="ray__form__label">Network Fee</div>
                <div className="ray__form__amount">
                  <AmountFormatter amount={0} ticker="ada" hash="lovelace" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Form.Item className="mt-4">
          <Button
            htmlType="submit"
            size="large"
            type="primary"
            className="ray__btn__send w-100"
            disabled
          >
            <i className="fe fe-plus-circle" />
            <strong>Create Project</strong>
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default KickStartCreateProject
