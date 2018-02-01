    package com.myreactnative;

        import com.facebook.react.ReactPackage;
        import com.facebook.react.bridge.NativeModule;
        import com.facebook.react.bridge.ReactApplicationContext;
        import com.facebook.react.uimanager.ViewManager;

        import java.util.ArrayList;
        import java.util.Collections;
        import java.util.List;

        /*需要在应用的Package类的createNativeModules方法中添加这个模块*/
        public class AnExampleReactPackage implements ReactPackage{

            @Override
            public List<ViewManager> createViewManagers(ReactApplicationContext reactContext){
                return Collections.emptyList();
            }

            public List<NativeModule> createNativeModules(ReactApplicationContext reactContext){
                List<NativeModule> modules = new ArrayList<>();
                modules.add(new ToastModule(reactContext));
                modules.add(new ImagePickerModule(reactContext));
                return modules;
            }

        }