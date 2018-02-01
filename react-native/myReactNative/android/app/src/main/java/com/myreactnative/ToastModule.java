package com.myreactnative;
        import android.widget.Toast;
        import com.facebook.react.bridge.NativeModule;
        import com.facebook.react.bridge.ReactApplicationContext;
        import com.facebook.react.bridge.ReactContext;
        import com.facebook.react.bridge.ReactContextBaseJavaModule;
        import com.facebook.react.bridge.ReactMethod;
        import java.util.Map;
        import java.util.HashMap;

        import com.facebook.react.bridge.Callback;
        import com.facebook.react.uimanager.IllegalViewOperationException;

        import com.facebook.react.bridge.Promise;
        import com.facebook.react.uimanager.PixelUtil;
        import com.facebook.react.bridge.Arguments;
        import com.facebook.react.bridge.WritableMap;

        import android.support.annotation.Nullable;
        import com.facebook.react.modules.core.DeviceEventManagerModule;



        /*创建一个原生模块 Toast*/
        public class ToastModule extends ReactContextBaseJavaModule {
                private static final String DURATION_SHORT_KEY = "SHORT";
                private static final String DURATION_LONG_KEY = "LONG";
                public static ReactContext myContext;

                public ToastModule(ReactApplicationContext reactContext){
                        super(reactContext);
                        myContext = reactContext;
                }

                /*必须实现 用于返回js调用该模块的模块名称*/
                @Override
                public String getName(){
                        return "ToastExample";
                }

                /*可选的，返回导出给js的使用的常量*/
                @Override
                public Map<String,Object> getConstants(){
                        final Map<String,Object> constants = new HashMap<>();
                        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
                        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
                        return constants;
                }

                /*要导出一个方法给js使用  需要注解@ReactMethod 方法的返回类型必须为void*/
                @ReactMethod
                public void show(String message,int duration){
                        Toast.makeText(getReactApplicationContext(),message,duration).show();
                }

                /*回调函数测试*/
                @ReactMethod
                public void measureLayout(int tag,int ancestorTag,Callback error,Callback success){
                        try{
                                success.invoke(100, 200, tag, ancestorTag);
                        }catch(IllegalViewOperationException e){
                                error.invoke(e.getMessage());
                        }
                }

                /*Promise*/
                @ReactMethod
                public void measureLayoutPromise(int tag,int ancestorTag,Promise promise){
                        try{
                                WritableMap map = Arguments.createMap();

                                map.putDouble("relativeX", PixelUtil.toDIPFromPixel(tag));
                                map.putDouble("relativeY", PixelUtil.toDIPFromPixel(ancestorTag));
                                map.putDouble("width", PixelUtil.toDIPFromPixel(100));
                                map.putDouble("height", PixelUtil.toDIPFromPixel(100));

                                promise.resolve(map);
                        }catch(IllegalViewOperationException  e){
                                promise.reject(e.getMessage());
                        }
                }

                /*发送事件到js*/
                private void sendEvent(ReactContext reactContext,String eventName,@Nullable WritableMap params){
                        System.out.println("reactContext="+reactContext);

                        reactContext
                        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                        .emit(eventName, params);
                }

                @ReactMethod
                public void eventTest(){
                        //在该方法中开启线程，并且延迟3秒 然后向js端发送事件
                        new Thread(new Runnable(){
                                @Override
                                public void run(){
                                        try{
                                                Thread.sleep(3000);
                                        }catch(InterruptedException e){
                                                e.printStackTrace();
                                        }

                                        //发送事件  事件名称为EventName
                                        WritableMap et= Arguments.createMap();
                                        et.putDouble("test", PixelUtil.toDIPFromPixel(100));
                                        sendEvent(myContext,"EventName",et);
        }
                        }).start();

                }
        }

