require 'json'
package = JSON.parse(File.read('../package.json'))

Pod::Spec.new do |s|
  s.name                = "tipsiTwitter"
  s.version             = package["version"]
  s.summary             = package["description"]
  s.description         = <<-DESC
                            Tispi Twitter
                          DESC
  s.homepage            = "https://github.com/tipsi/tipsi-twitter"
  s.license             = package['license']
  s.authors             = "Tipsi"
  s.source              = { :git => "https://github.com/tipsi/tipsi-twitter.git"}
  s.source_files        = 'TPSTwitterModule/**/*.{h,m}'
  s.resources           = 'TPSTwitterModule/**/*.xib'
  s.platform            = :ios, "8.0"

  s.dependency          'React'
  s.dependency          'TwitterKit'
end
