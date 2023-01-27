import React,{useState}from 'react';
import { 
    SafeAreaView,
    View,
    ScrollView,
    TouchableOpacity,
    FlatList

  } from 'react-native';
  import Text from '@components/common/Text';
  import R from '@components/utils/R';
  import TextInput from '@components/common/TextInput';
  import color from '@components/utils/Colors';
  import Icon from '@components/common/Icon';

 
  
  const MessagePractice = () => {
    const [message,setMessage]=useState('')
    const[myvalue,setmyValue]=useState([])


   function messageHandler(){
    setmyValue(message);
    console.log(message);
    const tempArr = myvalue.length > 0 ? [...myvalue] : [];
    //const id = Math.random().toString(16).slice(2);
    let tempObj = { title: myvalue};
    tempArr.push(tempObj);
    console.log(tempArr);
    //   setmyValue(tempArr);
   }

   const onChange = value => {
    setMessage(value);
  };
  console.log(myvalue,'KKKKKKKKKKKKKKKKKKKK');

  
  const renderList = (myvalue) => (
   
      <TouchableOpacity
        //onLongPress={() => deleteHandler(item)}
        >
        {/* <Todolist list={item} press={item.pressed}></Todolist> */}
        {/* <Text
              variant={'body2'}
              font={'WorkSansmedium'}
              gutterTop={6}
              color={R.color.red}
              align={'center'}
              style={{
                width: '100%',
              }}
              transform={'none'}>
              {myvalue}
            </Text> */}
      </TouchableOpacity>
    );
    return (
<SafeAreaView style={{flex: 1}}>
    <View style={{paddingVertical:20,backgroundColor:'blue'}}>
    <Text
              variant={'body2'}
              font={'WorkSansmedium'}
              gutterTop={6}
              color={R.color.red}
              align={'center'}
              style={{
                width: '100%',
              }}
              transform={'none'}>
              Chat
            </Text> 
    </View>
    <View style={{flex: 0.9}}>
        <ScrollView>

    <FlatList data={myvalue} renderItem={renderList} />
            <Text
              variant={'body2'}
              font={'WorkSansmedium'}
              gutterTop={6}
              color={R.color.red}
              align={'center'}
              style={{
                width: '100%',
              }}
              transform={'none'}>
              {message}
            </Text>
            
        </ScrollView>
    </View>
    <View style={{flex: 0.1,backgroundColor:'green'}}>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
    <TextInput
              placeholder={'Type here'}
              gutterBottom={3}
              gutterTop={10}
              //style={{ margin: 40 }}
              onChangeText={onChange}
              color={R.color.black}
              value={message}
              widthiInPercent={R.unit.scale(10)}
              //iconName={'Entypo'}
              //iconType={'user'}
              //formError={isValid}
            />
            <TouchableOpacity style={{marginTop:20}} onPress={()=>messageHandler()}>
            <Icon
                type={'FontAwesome'}
                name={'send'}
                size={25}
                color={'black'}
              />
              </TouchableOpacity>
        </View>

    </View>
{/* </View> */}
</SafeAreaView>
    )
};
export default MessagePractice;