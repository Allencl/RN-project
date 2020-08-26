import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Button, Provider, InputItem, List, Toast } from '@ant-design/react-native';
import { createForm, formShape } from 'rc-form';

import HttpWIS from '@wis_component/http';   // http 

class LoginScreenForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  /**
   * 登录
   * @param
   */
  submit = () => {
    this.props.form.validateFields((error, value) => {

        // 表单 不完整
        if(error){
          Toast.fail('必填字段未填!');
        } else{
          // 保存数据
          console.log( 123 );
          console.log( value );
        }
    });
  }


  /**
   * 测试 get 请求
   */
  httpGetHandle=()=>{

      HttpWIS.get({
        url:"https://jsonplaceholder.typicode.com/posts/1"
      }).then((data)=>{
        console.log("get: 拿到的数据");
        console.log(data);
      });


  }


  /**
   * 测试 post 请求
   */
  httpPostHandle=()=>{

    HttpWIS.post({
      url:"https://www.w3school.com.cn/example/jquery/demo_test_post.asp",
      params:{
        name:"kiki",
        age:22
      }
    })
    .then((data)=>{
      console.log("post :拿到的数据");
      console.log(data);
    });


}


  render() {
    const {navigation} = this.props;
    const {getFieldProps, getFieldError, isFieldValidating} = this.props.form;

    return (
      <Provider>
        <ScrollView
          style={{ flex: 1 }}
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <List renderHeader={'登录页'}>

            <InputItem
              {...getFieldProps('user',{
                rules:[{required:true}]
              })}
              error={getFieldError('user')}
              placeholder=""
            >
              用户名
            </InputItem>

            <InputItem
              {...getFieldProps('password',{
                rules:[{required:true}]
              })}
              error={getFieldError('password')}
              placeholder=""
            >
              密码
            </InputItem>


            <List.Item>
              <Button
                onPress={this.submit}
                type="primary"
              >
                登录
              </Button>
            </List.Item>
          </List>


          <List renderHeader={'测试按钮'}>
              <List.Item>
                <Button
                  onPress={() => navigation.navigate('Home')}
                  type="primary"
                >
                  跳转到-首页
                </Button>
              </List.Item>  

              <List.Item>
                <Button
                  onPress={this.httpGetHandle}
                  type="primary"
                >
                  测试-get请求
                </Button>
              </List.Item>  

              <List.Item>
                <Button
                  onPress={this.httpPostHandle}
                  type="primary"
                >
                  测试-post请求
                </Button>
              </List.Item> 

                           

          </List>

        </ScrollView>
      </Provider>
    );
  }
}



export default createForm()(LoginScreenForm);